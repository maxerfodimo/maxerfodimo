import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import { Quote } from '@/lib/models/Quote';

// GET /api/quotes - Get all quotes
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const theme = searchParams.get('theme');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');

    let query = {};
    if (theme) {
      query = { theme: theme.toLowerCase() };
    }

    let quotesQuery = Quote.find(query).sort({ createdAt: -1 });

    // Add pagination if limit is provided
    if (limit) {
      const limitNum = parseInt(limit);
      const pageNum = parseInt(page || '1');
      const skip = (pageNum - 1) * limitNum;
      
      quotesQuery = quotesQuery.skip(skip).limit(limitNum);
    }

    const quotes = await quotesQuery.exec();
    const total = await Quote.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: quotes,
      pagination: limit ? {
        page: parseInt(page || '1'),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      } : null
    });

  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}

// POST /api/quotes - Create a new quote
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { text, author, theme } = body;

    if (!text || !theme) {
      return NextResponse.json(
        { success: false, error: 'Text and theme are required' },
        { status: 400 }
      );
    }

    const quote = new Quote({
      text,
      author,
      theme: theme.toLowerCase()
    });

    const savedQuote = await quote.save();

    return NextResponse.json({
      success: true,
      data: savedQuote
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create quote' },
      { status: 500 }
    );
  }
}