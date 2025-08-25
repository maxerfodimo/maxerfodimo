'use client';

import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

export default function Analytics() {
  // Initialize Google Analytics
  useGoogleAnalytics();
  
  return null; // This component doesn't render anything
} 