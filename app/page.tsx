'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import ClientNavigation from "../components/ClientNavigation";
import QuoteCardBasic from "../components/QuoteCardBasic/QuoteCardBasic";
import { useGetRandomQuoteByTheme } from "../hooks/useGetRandomQuoteByTheme";
import { useGetQuotes } from '@/hooks/useGetQuotes';

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export default function Page() {
  const { quotes, fetchQuotes } = useGetQuotes();

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);


  return (
    <>
      <ClientNavigation />
      <div style={{ display: "flex", maxWidth: "800px", margin: "0 auto", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>Focus it's your friend, focus is your weapon</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          In today's digital age, maintaining focus has become one of the most challenging yet crucial skills for success and personal fulfillment.
        </p>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Social media platforms are designed to capture and hold our attention. They create endless streams of content that can consume hours of our time,
          often leaving us feeling drained and unproductive. While these platforms can be valuable for connection and information, they frequently
          become a barrier to achieving our most important goals.
        </p>
        <p style={{ fontSize: "18px", color: "#444" }}>
          True success comes from consistent, focused effort toward meaningful objectives. When we lose focus, we scatter our energy across
          countless distractions, making it nearly impossible to make significant progress in any area of our lives.
        </p>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Let's get started on your goals, we will help you to achieve them with our program. <Link href="/program">Program</Link> is a 12-day program that will help you to achieve your goals.
        </p>
        {quotes.filter((quote) => quote.author === 'Max Erfodimo').map((quote) => (
          <QuoteCardBasic
            key={quote._id}
            quote={quote}
          />
        ))}
      </div>



    </>
  );
}
