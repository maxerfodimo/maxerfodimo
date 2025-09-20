'use client';

import React from 'react';
import ClientNavigation from "../../components/ClientNavigation";
import QuoteCard from "../../components/QuoteCard";
import { useGetRandomQuoteByTheme } from "../../hooks/useGetRandomQuoteByTheme";

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

  const { quote, loading, error, fetchRandomQuote } = useGetRandomQuoteByTheme({
    theme: 'dreams',
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