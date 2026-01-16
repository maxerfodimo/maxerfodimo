import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Inspirational Quotes - Max Erfodimo',
    description: 'Discover powerful motivational quotes by Max Erfodimo. Get inspired with quotes about focus, discipline, motivation, and achieving your dreams.',
    keywords: 'motivational quotes, inspirational quotes, Max Erfodimo quotes, focus quotes, discipline quotes, motivation',
    alternates: {
        canonical: 'https://maxerfodimo.com/quotes',
    },
    openGraph: {
        title: 'Inspirational Quotes - Max Erfodimo',
        description: 'Discover powerful motivational quotes by Max Erfodimo about focus, discipline, and success.',
        url: 'https://maxerfodimo.com/quotes',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Inspirational Quotes - Max Erfodimo',
        description: 'Discover powerful motivational quotes by Max Erfodimo about focus, discipline, and success.',
    },
}

export default function QuotesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

