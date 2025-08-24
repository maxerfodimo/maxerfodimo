import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview, event } from '../lib/gtag';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  const router = useRouter();

  // Track page views on route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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