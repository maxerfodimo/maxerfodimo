'use client';

import React, { useState, useEffect } from 'react';
import ClientNavigation from "../components/ClientNavigation";
import QuoteCard from "../components/QuoteCard";

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export default function Page() {
  // Hardcoded default quote
  const defaultQuote: Quote = {
    _id: 'default',
    text: 'Stay focused, the result will come.',
    author: 'Max Erfodimo',
    theme: 'focus',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const [quote, setQuote] = useState<Quote>(defaultQuote);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/quotes/random?theme=focus');
      const data = await response.json();
      
      if (data.success) {
        setQuote(data.data);
      } else {
        setError(data.error || 'Failed to fetch quote');
      }
    } catch (err) {
      setError('Failed to fetch quote');
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ClientNavigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Georgia",
          padding:"8px",
          minHeight: "70vh"
        }}
      >
        <QuoteCard 
          quote={quote}
          loading={loading}
          error={error}
          onNextQuote={fetchRandomQuote}
        />
      </div>
    </>
  );
}
