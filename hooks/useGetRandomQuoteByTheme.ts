import { useState, useCallback } from 'react';

interface Quote {
  _id: string;
  text: string;
  author?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

interface UseGetRandomQuoteByThemeProps {
  theme: string;
  defaultQuote: Quote;
}

interface UseGetRandomQuoteByThemeReturn {
  quote: Quote;
  loading: boolean;
  error: string | null;
  fetchRandomQuote: () => Promise<void>;
}

export function useGetRandomQuoteByTheme({ 
  theme, 
  defaultQuote 
}: UseGetRandomQuoteByThemeProps): UseGetRandomQuoteByThemeReturn {
  const [quote, setQuote] = useState<Quote>(defaultQuote);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/quotes/random?theme=${theme}`);
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
  }, [theme]);

  return {
    quote,
    loading,
    error,
    fetchRandomQuote
  };
}