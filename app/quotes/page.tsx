'use client';

import React, { useEffect } from 'react';
import ClientNavigation from "../../components/ClientNavigation";
import QuoteCardBasic from "../../components/QuoteCardBasic/QuoteCardBasic";
import { useGetRandomQuoteByTheme } from "../../hooks/useGetRandomQuoteByTheme";
import { useGetQuotes } from '@/hooks/useGetQuotes';


interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export default function DisciplinePage() {

  const { quotes, fetchQuotes } = useGetQuotes();

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);
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

        {quotes.map((quote) => (
          <QuoteCardBasic
            key={quote._id}
            quote={quote}
          />
        ))}
      </div>
    </>
  );
}