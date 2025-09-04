// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-ZYMWHJ9XWQ';

// Log page views
export const pageview = (url: string) => {
  // Double-check we're on the client and gtag is available
  if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    } catch (error) {
      console.warn('Google Analytics pageview failed:', error);
    }
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  // Double-check we're on the client and gtag is available
  if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      console.warn('Google Analytics event failed:', error);
    }
  }
}; 