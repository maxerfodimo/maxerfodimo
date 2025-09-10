'use client';

import React, { useState, useEffect } from 'react';
import ClientNavigation from '../../components/ClientNavigation';

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export default function RandomQuotePage() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [dataSource, setDataSource] = useState<string>('database');

  const themes = [
    { value: '', label: 'All Themes' },
    { value: 'motivation', label: 'Motivation' },
    { value: 'discipline', label: 'Discipline' },
    { value: 'focus', label: 'Focus' },
    { value: 'plans', label: 'Plans' },
    { value: 'dreams', label: 'Dreams' },
    { value: 'inspiration', label: 'Inspiration' }
  ];

  const setupDefaultQuotes = async () => {
    try {
      const response = await fetch('/api/quotes/setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data.success;
    } catch (err) {
      console.error('Error setting up default quotes:', err);
      return false;
    }
  };

  const fetchRandomQuote = async (theme?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const url = theme 
        ? `/api/quotes/random?theme=${theme}`
        : '/api/quotes/random';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setQuote(data.data);
        setDataSource(data.source || 'database');
      } else if (data.error && data.error.includes('No quotes found')) {
        // If no quotes found, try to set up default quotes
        const setupSuccess = await setupDefaultQuotes();
        if (setupSuccess) {
          // Retry fetching after setup
          const retryResponse = await fetch(url);
          const retryData = await retryResponse.json();
          if (retryData.success) {
            setQuote(retryData.data);
            setDataSource(retryData.source || 'database');
          } else {
            setError('Failed to fetch quote after setup');
          }
        } else {
          setError('No quotes available and failed to set up default quotes');
        }
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

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    fetchRandomQuote(theme);
  };

  const handleNewQuote = () => {
    fetchRandomQuote(selectedTheme);
  };

  return (
    <>
      <ClientNavigation />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: 'Georgia',
          padding: '20px',
          minHeight: '80vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '24px',
            gap: '30px',
            padding: '0 8px',
            textAlign: 'center',
            maxWidth: '800px',
            width: '100%'
          }}
        >
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            lineHeight: '1.2',
            margin: '0',
            padding: '0 10px'
          }}>
            Random Quote
          </h1>

          {/* Theme Selector */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => handleThemeChange(theme.value)}
                style={{
                  padding: '8px 16px',
                  border: selectedTheme === theme.value ? '2px solid #333' : '1px solid #ccc',
                  borderRadius: '20px',
                  backgroundColor: selectedTheme === theme.value ? '#f0f0f0' : 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                {theme.label}
              </button>
            ))}
          </div>

          {/* Quote Display */}
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%'
          }}>
            {loading ? (
              <div style={{
                fontSize: '18px',
                color: '#666',
                fontStyle: 'italic'
              }}>
                Loading your quote...
              </div>
            ) : error ? (
              <div style={{
                fontSize: '18px',
                color: '#d32f2f',
                textAlign: 'center'
              }}>
                {error}
              </div>
            ) : quote ? (
              <>
                <blockquote style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                  lineHeight: '1.6',
                  color: '#333',
                  margin: '0 0 20px 0',
                  fontStyle: 'italic',
                  position: 'relative'
                }}>
                  "{quote.text}"
                </blockquote>
                
                {quote.author && (
                  <cite style={{
                    fontSize: '16px',
                    color: '#666',
                    fontStyle: 'normal',
                    display: 'block',
                    textAlign: 'right'
                  }}>
                    — {quote.author}
                  </cite>
                )}
                
                <div style={{
                  marginTop: '20px',
                  fontSize: '14px',
                  color: '#888',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <span>
                    Theme: <span style={{
                      backgroundColor: '#e0e0e0',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      textTransform: 'capitalize'
                    }}>
                      {quote.theme}
                    </span>
                  </span>
                </div>
              </>
            ) : null}
          </div>

          {/* New Quote Button */}
          <button
            onClick={handleNewQuote}
            disabled={loading}
            style={{
              padding: '12px 24px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : 'Get New Quote'}
          </button>
        </div>
      </div>
    </>
  );
}