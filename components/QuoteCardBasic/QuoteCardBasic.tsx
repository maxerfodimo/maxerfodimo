import React from 'react';
import styles from './QuoteCardBasic.module.css';

interface QuoteCardBasicProps {
  quote: Quote;
}

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}



export default function QuoteCardBasic({ quote }: QuoteCardBasicProps) {
  return (
    <div className={styles.container}>
      {/* Quote Card */}
      <div className={styles.quoteCard}>
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
      </div>
    </div>
  );
}