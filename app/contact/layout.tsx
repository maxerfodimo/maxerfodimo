import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact - Max Erfodimo',
    description: 'Get in touch with Max Erfodimo. Reach out for questions, collaborations, or to learn more about focus programs and motivational content.',
    keywords: 'contact Max Erfodimo, get in touch, collaboration, questions',
    alternates: {
        canonical: 'https://maxerfodimo.com/contact',
    },
    openGraph: {
        title: 'Contact - Max Erfodimo',
        description: 'Get in touch with Max Erfodimo for questions, collaborations, or to learn more.',
        url: 'https://maxerfodimo.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact - Max Erfodimo',
        description: 'Get in touch with Max Erfodimo for questions, collaborations, or to learn more.',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

