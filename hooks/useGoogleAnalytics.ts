import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, event } from '../lib/gtag';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track page views on route changes (only on client)
  useEffect(() => {
    if (isClient && pathname && typeof window !== 'undefined') {
      const url = pathname + (searchParams ? searchParams.toString() : '');
      pageview(url);
    }
  }, [isClient, pathname, searchParams]);

  // Function to track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (isClient && typeof window !== 'undefined') {
      event({ action, category, label, value });
    }
  };

  // Function to track page views manually
  const trackPageView = (url: string) => {
    if (isClient && typeof window !== 'undefined') {
      pageview(url);
    }
  };

  return {
    trackEvent,
    trackPageView,
    isClient,
  };
}; 