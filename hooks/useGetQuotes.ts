import { useState, useCallback } from 'react';

interface Quote {
    _id: string;
    text: string;
    author?: string;
    theme: string;
    createdAt: string;
    updatedAt: string;
}


interface UseGetQuotesReturn {
    quotes: Quote[];
    loading: boolean;
    error: string | null;
    fetchQuotes: () => Promise<void>;
}

export function useGetQuotes(): UseGetQuotesReturn {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchQuotes = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/quotes`);
            const data = await response.json();

            if (data.success) {
                setQuotes(data.data);
            } else {
                setError(data.error || 'Failed to fetch quote');
            }
        } catch (err) {
            setError('Failed to fetch quote');
            console.error('Error fetching quote:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        quotes,
        loading,
        error,
        fetchQuotes
    };
}