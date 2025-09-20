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

export default function PlansPage() {
  // Hardcoded default quote for plans
  const defaultQuote: Quote = {
    _id: 'default-plans',
    text: 'A goal without a plan is just a wish.',
    author: 'Antoine de Saint-Exupéry',
    theme: 'plans',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const { quote, loading, error, fetchRandomQuote } = useGetRandomQuoteByTheme({
    theme: 'plans',
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