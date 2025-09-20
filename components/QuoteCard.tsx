import React from 'react';
import styles from './QuoteCard.module.css';

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

interface QuoteCardProps {
  quote: Quote | null;
  loading: boolean;
  error: string | null;
  onNextQuote: () => void;
}

export default function QuoteCard({ quote, loading, error, onNextQuote }: QuoteCardProps) {
  return (
    <div className={styles.container}>
      {/* Quote Card */}
      <div className={styles.quoteCard}>
        {error ? (
          <div className={styles.error}>
            {error}
          </div>
        ) : quote ? (
          <>
            <blockquote className={styles.quote}>
              "{quote.text}"
            </blockquote>
            
            {quote.author && (
              <cite className={styles.author}>
                — {quote.author}
              </cite>
            )}
            
            <div className={styles.themeContainer}>
              Theme: <span className={styles.theme}>
                {quote.theme}
              </span>
            </div>
          </>
        ) : (
          <div className={styles.loading}>
            Loading your quote...
          </div>
        )}
      </div>

      {/* Next Quote Button */}
      <button
        onClick={onNextQuote}
        disabled={loading}
        className={styles.nextButton}
      >
        {loading ? 'Loading...' : 'Next Quote'}
      </button>
    </div>
  );
}