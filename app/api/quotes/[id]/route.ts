import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import { Quote } from '@/lib/models/Quote';

// GET /api/quotes/[id] - Get a specific quote by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const quote = await Quote.findById(params.id);
    
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
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { text, author, theme } = body;

    const updateData: any = {};
    if (text !== undefined) updateData.text = text;
    if (author !== undefined) updateData.author = author;
    if (theme !== undefined) updateData.theme = theme.toLowerCase();

    const quote = await Quote.findByIdAndUpdate(
      params.id,
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
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const quote = await Quote.findByIdAndDelete(params.id);
    
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