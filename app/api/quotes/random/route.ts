import { NextRequest, NextResponse } from 'next/server';

// In-memory cache for quotes
const quotesCache = new Map<string, any[]>();
const cacheTimestamps = new Map<string, number>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Auto-sync function to check and update quotes from JSON files
async function autoSyncQuotes() {
  try {
    if (!process.env.MONGODB_URI) return;
    
    const connectDB = (await import('@/lib/mongoose')).default;
    const { Quote } = await import('@/lib/models/Quote');
    
    await connectDB();
    
    const themes = ['focus', 'motivation', 'dreams', 'plans', 'discipline'];
    
    for (const theme of themes) {
      try {
        const fs = await import('fs');
        const path = await import('path');
        
        const filePath = path.join(process.cwd(), 'data', 'quotes', `${theme}.json`);
        
        if (!fs.existsSync(filePath)) continue;
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const jsonQuotes = JSON.parse(fileContent);
        
        if (!Array.isArray(jsonQuotes)) continue;
        
        const currentCount = await Quote.countDocuments({ theme });
        const jsonCount = jsonQuotes.length;
        
        // Only sync if JSON has more quotes
        if (jsonCount > currentCount) {
          await Quote.deleteMany({ theme });
          const quotesToInsert = jsonQuotes.map(quote => ({
            ...quote,
            theme: theme.toLowerCase()
          }));
          await Quote.insertMany(quotesToInsert);
          
          // Clear cache for this theme
          quotesCache.delete(theme);
          cacheTimestamps.delete(theme);
          
          console.log(`Auto-synced ${theme}: ${currentCount} → ${jsonCount} quotes`);
        }
      } catch (error) {
        console.error(`Auto-sync error for ${theme}:`, error);
      }
    }
  } catch (error) {
    console.error('Auto-sync error:', error);
  }
}

// Run auto-sync on first request
let autoSyncRun = false;

// Fallback quotes when MongoDB is not available
const fallbackQuotes = [
  {
    _id: '1',
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    theme: "motivation",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '2',
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    theme: "motivation",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '3',
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    theme: "discipline",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '4',
    text: "The successful warrior is the average man with laser-like focus.",
    author: "Bruce Lee",
    theme: "focus",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '5',
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    theme: "plans",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// GET /api/quotes/random - Get a random quote
export async function GET(request: NextRequest) {
  try {
    // Run auto-sync on first request
    if (!autoSyncRun) {
      autoSyncRun = true;
      autoSyncQuotes().catch(console.error);
    }
    
    const { searchParams } = new URL(request.url);
    const theme = searchParams.get('theme');

    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      // Use fallback quotes
      let quotes = fallbackQuotes;
      
      if (theme) {
        quotes = fallbackQuotes.filter(quote => 
          quote.theme.toLowerCase() === theme.toLowerCase()
        );
      }
      
      if (quotes.length === 0) {
        return NextResponse.json(
          { success: false, error: theme ? `No quotes found for theme: ${theme}` : 'No quotes found' },
          { status: 404 }
        );
      }
      
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      
      return NextResponse.json({
        success: true,
        data: randomQuote,
        source: 'fallback'
      });
    }

    // Try to use MongoDB
    try {
      const connectDB = (await import('@/lib/mongoose')).default;
      const { Quote } = await import('@/lib/models/Quote');
      
      await connectDB();
      
      const themeKey = theme ? theme.toLowerCase() : 'all';
      const now = Date.now();
      
      // Check if we have cached quotes for this theme
      let quotes = quotesCache.get(themeKey);
      const cacheTime = cacheTimestamps.get(themeKey);
      
      // If cache is empty or expired, fetch from database
      if (!quotes || !cacheTime || (now - cacheTime) > CACHE_DURATION) {
        let query = {};
        if (theme) {
          query = { theme: theme.toLowerCase() };
        }
        
        // Fetch all quotes for this theme
        quotes = await Quote.find(query).exec();
        
        // Cache the results
        quotesCache.set(themeKey, quotes);
        cacheTimestamps.set(themeKey, now);
      }
      
      if (quotes.length === 0) {
        return NextResponse.json(
          { success: false, error: theme ? `No quotes found for theme: ${theme}` : 'No quotes found' },
          { status: 404 }
        );
      }

      // Get a random quote from cached quotes
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      return NextResponse.json({
        success: true,
        data: randomQuote,
        source: 'database'
      });
      
    } catch (dbError) {
      console.error('Database error, using fallback:', dbError);
      
      // Fallback to hardcoded quotes
      let quotes = fallbackQuotes;
      
      if (theme) {
        quotes = fallbackQuotes.filter(quote => 
          quote.theme.toLowerCase() === theme.toLowerCase()
        );
      }
      
      if (quotes.length === 0) {
        return NextResponse.json(
          { success: false, error: theme ? `No quotes found for theme: ${theme}` : 'No quotes found' },
          { status: 404 }
        );
      }
      
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      
      return NextResponse.json({
        success: true,
        data: randomQuote,
        source: 'fallback'
      });
    }

  } catch (error) {
    console.error('Error fetching random quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch random quote' },
      { status: 500 }
    );
  }
}