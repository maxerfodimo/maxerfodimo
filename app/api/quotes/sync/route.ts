import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET /api/quotes/sync - Sync quotes from JSON files to database
export async function GET() {
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

    const themes = ['focus', 'motivation', 'dreams', 'plans', 'discipline'];
    const results = {
      synced: 0,
      skipped: 0,
      errors: 0,
      details: [] as any[]
    };

    for (const theme of themes) {
      try {
        const filePath = path.join(process.cwd(), 'data', 'quotes', `${theme}.json`);
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
          results.details.push({
            theme,
            status: 'skipped',
            reason: 'File not found'
          });
          results.skipped++;
          continue;
        }

        // Read JSON file
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const jsonQuotes = JSON.parse(fileContent);

        if (!Array.isArray(jsonQuotes)) {
          results.details.push({
            theme,
            status: 'error',
            reason: 'Invalid JSON format'
          });
          results.errors++;
          continue;
        }

        // Get current quotes count in DB for this theme
        const currentCount = await Quote.countDocuments({ theme });
        const jsonCount = jsonQuotes.length;

        if (jsonCount <= currentCount) {
          results.details.push({
            theme,
            status: 'skipped',
            reason: `JSON has ${jsonCount} quotes, DB has ${currentCount} quotes`
          });
          results.skipped++;
          continue;
        }

        // Clear existing quotes for this theme
        await Quote.deleteMany({ theme });

        // Insert new quotes
        const quotesToInsert = jsonQuotes.map(quote => ({
          ...quote,
          theme: theme.toLowerCase()
        }));

        await Quote.insertMany(quotesToInsert);

        results.details.push({
          theme,
          status: 'synced',
          reason: `Updated from ${currentCount} to ${jsonCount} quotes`
        });
        results.synced++;

      } catch (error) {
        console.error(`Error syncing theme ${theme}:`, error);
        results.details.push({
          theme,
          status: 'error',
          reason: error instanceof Error ? error.message : 'Unknown error'
        });
        results.errors++;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Sync completed',
      results
    });

  } catch (error) {
    console.error('Error syncing quotes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to sync quotes' },
      { status: 500 }
    );
  }
}

// POST /api/quotes/sync - Force sync (same as GET but with force flag)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { force = false } = body;

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

    const themes = ['focus', 'motivation', 'dreams', 'plans', 'discipline'];
    const results = {
      synced: 0,
      skipped: 0,
      errors: 0,
      details: [] as any[]
    };

    for (const theme of themes) {
      try {
        const filePath = path.join(process.cwd(), 'data', 'quotes', `${theme}.json`);
        
        if (!fs.existsSync(filePath)) {
          results.details.push({
            theme,
            status: 'skipped',
            reason: 'File not found'
          });
          results.skipped++;
          continue;
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const jsonQuotes = JSON.parse(fileContent);

        if (!Array.isArray(jsonQuotes)) {
          results.details.push({
            theme,
            status: 'error',
            reason: 'Invalid JSON format'
          });
          results.errors++;
          continue;
        }

        const currentCount = await Quote.countDocuments({ theme });
        const jsonCount = jsonQuotes.length;

        // If force is true, always sync regardless of count
        if (!force && jsonCount <= currentCount) {
          results.details.push({
            theme,
            status: 'skipped',
            reason: `JSON has ${jsonCount} quotes, DB has ${currentCount} quotes`
          });
          results.skipped++;
          continue;
        }

        // Clear and insert
        await Quote.deleteMany({ theme });
        const quotesToInsert = jsonQuotes.map(quote => ({
          ...quote,
          theme: theme.toLowerCase()
        }));
        await Quote.insertMany(quotesToInsert);

        results.details.push({
          theme,
          status: 'synced',
          reason: force ? `Force updated to ${jsonCount} quotes` : `Updated from ${currentCount} to ${jsonCount} quotes`
        });
        results.synced++;

      } catch (error) {
        console.error(`Error syncing theme ${theme}:`, error);
        results.details.push({
          theme,
          status: 'error',
          reason: error instanceof Error ? error.message : 'Unknown error'
        });
        results.errors++;
      }
    }

    return NextResponse.json({
      success: true,
      message: force ? 'Force sync completed' : 'Sync completed',
      results
    });

  } catch (error) {
    console.error('Error syncing quotes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to sync quotes' },
      { status: 500 }
    );
  }
}