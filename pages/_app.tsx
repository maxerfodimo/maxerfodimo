
import React from "react";
import type { AppProps } from 'next/app'
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';
 
export default function App({ Component, pageProps }: AppProps) {
  // Initialize Google Analytics
  useGoogleAnalytics();
  
  return <Component {...pageProps} />
}