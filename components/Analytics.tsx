'use client';

import { Suspense } from 'react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

function AnalyticsInner() {
  // Initialize Google Analytics
  useGoogleAnalytics();
  
  return null; // This component doesn't render anything
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
} 