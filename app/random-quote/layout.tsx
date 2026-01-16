import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Random Quote Generator - Max Erfodimo',
  description: 'Get a random inspirational quote by Max Erfodimo. Discover daily motivation, focus, discipline, and success quotes to inspire your journey.',
  keywords: 'random quote, quote generator, daily quote, inspirational quote, Max Erfodimo, motivation generator',
  alternates: {
    canonical: 'https://maxerfodimo.com/random-quote',
  },
  openGraph: {
    title: 'Random Quote Generator - Max Erfodimo',
    description: 'Get a random inspirational quote by Max Erfodimo to inspire your day.',
    url: 'https://maxerfodimo.com/random-quote',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Quote Generator - Max Erfodimo',
    description: 'Get a random inspirational quote by Max Erfodimo to inspire your day.',
  },
}

export default function RandomQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

