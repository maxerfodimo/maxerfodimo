import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function DELETE() {
    try {
        if (!process.env.MONGODB_URI) {
            return NextResponse.json({ success: false, error: 'MongoDB not configured' }, { status: 500 });
        }

        const connectDB = (await import('@/lib/mongoose')).default;
        const { Quote } = await import('@/lib/models/Quote');

        await connectDB();

        const allQuotes = await Quote.find({}).exec();

        const seen = new Set<string>();
        const duplicatesToDelete: mongoose.Types.ObjectId[] = [];

        for (const quote of allQuotes) {
            const key = quote.text.trim().toLowerCase();
            if (seen.has(key)) {
                duplicatesToDelete.push(quote._id); // _id is already ObjectId in Mongoose
            } else {
                seen.add(key);
            }
        }

        let deletedCount = 0;

        if (duplicatesToDelete.length > 0) {
            const result = await Quote.deleteMany({ _id: { $in: duplicatesToDelete } });
            deletedCount = result.deletedCount ?? 0;
        }

        return NextResponse.json({ success: true, scanned: allQuotes.length, deleted: deletedCount });

    } catch (error: any) {
        console.error('❌ Error deleting duplicates:', error);
        return NextResponse.json(
            { success: false, error: error?.message ?? JSON.stringify(error) },
            { status: 500 }
        );
    }

}
