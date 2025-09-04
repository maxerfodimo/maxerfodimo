'use client';

import { Suspense } from 'react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

function AnalyticsInner() {
  // Initialize Google Analytics
  const { isClient } = useGoogleAnalytics();
  
  // Don't render anything until we're on the client
  if (!isClient) {
    return null;
  }
  
  return null; // This component doesn't render anything
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
} 