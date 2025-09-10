import { Document, Schema, model, models } from 'mongoose';

export interface IQuote extends Document {
  text: string;
  author?: string;
  theme: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema = new Schema<IQuote>({
  text: {
    type: String,
    required: [true, 'Quote text is required'],
    trim: true,
    maxlength: [1000, 'Quote text cannot exceed 1000 characters']
  },
  author: {
    type: String,
    trim: true,
    maxlength: [100, 'Author name cannot exceed 100 characters']
  },
  theme: {
    type: String,
    required: [true, 'Theme is required'],
    enum: ['motivation', 'discipline', 'focus', 'plans', 'dreams', 'inspiration'],
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Update the updatedAt field before saving
QuoteSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const Quote = models.Quote || model<IQuote>('Quote', QuoteSchema);