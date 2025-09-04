import React from "react"
import CustomAnalytics from '../components/Analytics'
import { Analytics } from "@vercel/analytics/next"
import ClientOnlyAnalytics from '../components/ClientOnlyAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stay Focused – Motivational Quote by Max Erfodimo',
  description: 'Stay focused and the result will come. A powerful motivational quote by Max Erfodimo to inspire persistence, discipline, and success.',
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
    type: 'article',
    url: 'https://maxerfodimo.com/images/maxerfodimo.jpg',
    images: [
      {
        url: 'https://maxerfodimo.com/images/maxerfodimo.jpg',
        width: 1200,
        height: 630,  
        alt: 'Stay Focused - Motivational Quote',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay Focused – Motivational Quote by Max Erfodimo',
    description: 'Stay focused and the result will come. A motivational quote to inspire persistence, discipline, and success.',
    images: ['https://maxerfodimo.com/images/maxerfodimo.jpg'],
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