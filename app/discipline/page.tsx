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

export default function DisciplinePage() {
  // Hardcoded default quote for discipline
  const defaultQuote: Quote = {
    _id: 'default-discipline',
    text: 'Discipline is the bridge between goals and accomplishment.',
    author: 'Jim Rohn',
    theme: 'discipline',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const { quote, loading, error, fetchRandomQuote } = useGetRandomQuoteByTheme({
    theme: 'discipline',
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