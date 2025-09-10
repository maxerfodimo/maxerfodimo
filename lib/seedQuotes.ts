import connectDB from './mongoose';
import { Quote } from './models/Quote';

const sampleQuotes = [
  // Motivation quotes
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
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    theme: "motivation"
  },
  {
    text: "Use motivation for your goals. If you don't have it, use discipline, but never— 'maybe later'.",
    author: "Unknown",
    theme: "motivation"
  },

  // Discipline quotes
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    theme: "discipline"
  },
  {
    text: "The price of excellence is discipline. The cost of mediocrity is disappointment.",
    author: "William Arthur Ward",
    theme: "discipline"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
    theme: "discipline"
  },

  // Focus quotes
  {
    text: "The successful warrior is the average man with laser-like focus.",
    author: "Bruce Lee",
    theme: "focus"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    theme: "focus"
  },
  {
    text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
    author: "Alexander Graham Bell",
    theme: "focus"
  },

  // Plans quotes
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    theme: "plans"
  },
  {
    text: "By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin",
    theme: "plans"
  },
  {
    text: "Plans are nothing; planning is everything.",
    author: "Dwight D. Eisenhower",
    theme: "plans"
  },

  // Dreams quotes
  {
    text: "If you don't know why you wake up in the morning, maybe you should sleep a bit longer.",
    author: "Unknown",
    theme: "dreams"
  },
  {
    text: "Don't take the fear of failure on your trip for success.",
    author: "Unknown",
    theme: "dreams"
  },
  {
    text: "Dreams are the seeds of change. Nothing ever grows without a seed, and nothing ever changes without a dream.",
    author: "Debby Boone",
    theme: "dreams"
  },

  // Inspiration quotes
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    theme: "inspiration"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    theme: "inspiration"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    theme: "inspiration"
  }
];

export async function seedQuotes() {
  try {
    await connectDB();
    
    // Clear existing quotes
    await Quote.deleteMany({});
    
    // Insert sample quotes
    const quotes = await Quote.insertMany(sampleQuotes);
    
    console.log(`Successfully seeded ${quotes.length} quotes`);
    return quotes;
  } catch (error) {
    console.error('Error seeding quotes:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedQuotes()
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}