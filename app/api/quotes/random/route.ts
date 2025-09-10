import { NextRequest, NextResponse } from 'next/server';

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
      
      let query = {};
      if (theme) {
        query = { theme: theme.toLowerCase() };
      }

      // Get total count of quotes matching the query
      const total = await Quote.countDocuments(query);
      
      if (total === 0) {
        return NextResponse.json(
          { success: false, error: theme ? `No quotes found for theme: ${theme}` : 'No quotes found' },
          { status: 404 }
        );
      }

      // Get a random quote
      const randomIndex = Math.floor(Math.random() * total);
      const randomQuote = await Quote.findOne(query).skip(randomIndex).exec();

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