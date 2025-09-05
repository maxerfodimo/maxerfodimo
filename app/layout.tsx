import React from "react"
import CustomAnalytics from '../components/Analytics'
import { Analytics } from "@vercel/analytics/next"
import ClientOnlyAnalytics from '../components/ClientOnlyAnalytics'
import StructuredData from '../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stay Focused – Motivational Quote by Max Erfodimo',
  description: 'Stay focused and the result will come. A powerful motivational quote by Max Erfodimo to inspire persistence, discipline, and success.',
  keywords: 'motivation, focus, success, Max Erfodimo, inspirational quotes, discipline, perseverance',
  authors: [{ name: 'Max Erfodimo' }],
  creator: 'Max Erfodimo',
  publisher: 'Max Erfodimo',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://maxerfodimo.com',
  },
  icons: {
    icon: [
      { url: '/images/maxerfodimoicon.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/maxerfodimoicon.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    shortcut: '/images/maxerfodimoicon.jpg',
    apple: [
      { url: '/images/maxerfodimoicon.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    title: 'Stay Focused – Motivational Quote by Max Erfodimo',
    description: 'Stay focused and the result will come. A motivational quote to inspire persistence, discipline, and success.',
    type: 'website',
    url: 'https://maxerfodimo.com',
    siteName: 'Max Erfodimo',
    locale: 'en_US',
    images: [
      {
        url: 'https://maxerfodimo.com/images/maxerfodimo.jpg',
        width: 1200,
        height: 630,  
        alt: 'Stay Focused - Motivational Quote by Max Erfodimo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay Focused – Motivational Quote by Max Erfodimo',
    description: 'Stay focused and the result will come. A motivational quote to inspire persistence, discipline, and success.',
    images: ['https://maxerfodimo.com/images/maxerfodimo.jpg'],
    creator: '@maxerfodimo',
    site: '@maxerfodimo',
  },
  other: {
    'google-site-verification': 'your-verification-code-here', // Replace with your actual verification code
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          {/* Analytics scripts moved to client-only component */}
          <StructuredData />
        </head>
        <body>
          {/* Google Tag Manager (noscript) - This is safe for SSR */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-T9FFFPPG"
              height="0" 
              width="0" 
              style={{display:'none',visibility:'hidden'}}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          
          {children}
          
          {/* Client-only analytics components */}
          <ClientOnlyAnalytics />
          <Analytics />
          <CustomAnalytics />
        </body>
      </html>
    )
  }