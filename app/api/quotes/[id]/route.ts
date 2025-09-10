import { NextRequest, NextResponse } from 'next/server';

// GET /api/quotes/[id] - Get a specific quote by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'MongoDB not configured' },
        { status: 503 }
      );
    }

    const connectDB = (await import('@/lib/mongoose')).default;
    const { Quote } = await import('@/lib/models/Quote');
    
    await connectDB();
    
    const { id } = await params;
    const quote = await Quote.findById(id);
    
    if (!quote) {
      return NextResponse.json(
        { success: false, error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: quote
    });

  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch quote' },
      { status: 500 }
    );
  }
}

// PUT /api/quotes/[id] - Update a specific quote
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'MongoDB not configured' },
        { status: 503 }
      );
    }

    const connectDB = (await import('@/lib/mongoose')).default;
    const { Quote } = await import('@/lib/models/Quote');
    
    await connectDB();
    
    const { id } = await params;
    const body = await request.json();
    const { text, author, theme } = body;

    const updateData: any = {};
    if (text !== undefined) updateData.text = text;
    if (author !== undefined) updateData.author = author;
    if (theme !== undefined) updateData.theme = theme.toLowerCase();

    const quote = await Quote.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!quote) {
      return NextResponse.json(
        { success: false, error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: quote
    });

  } catch (error) {
    console.error('Error updating quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update quote' },
      { status: 500 }
    );
  }
}

// DELETE /api/quotes/[id] - Delete a specific quote
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'MongoDB not configured' },
        { status: 503 }
      );
    }

    const connectDB = (await import('@/lib/mongoose')).default;
    const { Quote } = await import('@/lib/models/Quote');
    
    await connectDB();
    
    const { id } = await params;
    const quote = await Quote.findByIdAndDelete(id);
    
    if (!quote) {
      return NextResponse.json(
        { success: false, error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete quote' },
      { status: 500 }
    );
  }
}