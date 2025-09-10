import { NextRequest, NextResponse } from 'next/server';

// Default quotes to seed the database
const defaultQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    theme: "motivation"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    theme: "motivation"
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    theme: "discipline"
  },
  {
    text: "The successful warrior is the average man with laser-like focus.",
    author: "Bruce Lee",
    theme: "focus"
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    theme: "plans"
  }
];

// POST /api/quotes/setup - Set up default quotes
export async function POST(request: NextRequest) {
  try {
    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({
        success: false,
        error: 'MongoDB not configured. Please set MONGODB_URI in .env.local',
        fallbackQuotes: defaultQuotes
      }, { status: 200 });
    }

    // Try to connect to MongoDB and set up quotes
    try {
      const connectDB = (await import('@/lib/mongoose')).default;
      const { Quote } = await import('@/lib/models/Quote');
      
      await connectDB();
      
      // Check if quotes already exist
      const existingCount = await Quote.countDocuments();
      
      if (existingCount > 0) {
        return NextResponse.json({
          success: true,
          message: `Database already has ${existingCount} quotes`,
          count: existingCount
        });
      }
      
      // Insert default quotes
      const quotes = await Quote.insertMany(defaultQuotes);
      
      return NextResponse.json({
        success: true,
        message: `Successfully set up ${quotes.length} default quotes`,
        count: quotes.length,
        quotes: quotes
      });
      
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({
        success: false,
        error: 'Failed to connect to database',
        fallbackQuotes: defaultQuotes
      }, { status: 200 });
    }

  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to set up quotes',
      fallbackQuotes: defaultQuotes
    }, { status: 500 });
  }
}