import { useEffect } from 'react';
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

  // Track page views on route changes
  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  // Function to track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    event({ action, category, label, value });
  };

  // Function to track page views manually
  const trackPageView = (url: string) => {
    pageview(url);
  };

  return {
    trackEvent,
    trackPageView,
  };
}; 