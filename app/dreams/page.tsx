'use client';

import React, { useState, useEffect } from 'react';
import ClientNavigation from "../../components/ClientNavigation";
import QuoteCard from "../../components/QuoteCard";

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export default function DreamsPage() {
  // Hardcoded default quote for dreams
  const defaultQuote: Quote = {
    _id: 'default-dreams',
    text: 'If you don\'t know why you wake up in the morning, maybe you should sleep a bit longer.',
    author: 'Max Erfodimo',
    theme: 'dreams',
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
      const response = await fetch('/api/quotes/random?theme=dreams');
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
          padding: "8px",
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