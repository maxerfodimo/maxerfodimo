'use client';

import React from 'react';
import ClientNavigation from "../components/ClientNavigation";
import QuoteCard from "../components/QuoteCard";
import { useGetRandomQuoteByTheme } from "../hooks/useGetRandomQuoteByTheme";

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

  const { quote, loading, error, fetchRandomQuote } = useGetRandomQuoteByTheme({
    theme: 'focus',
    defaultQuote
  });

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
