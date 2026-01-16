import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Focus Programs - 12-Day Program by Max Erfodimo',
    description: 'Join our 12-day focus program designed to help you achieve your goals. Learn discipline, maintain focus, and unlock your potential with structured guidance from Max Erfodimo.',
    keywords: 'focus program, 12-day program, goal achievement, discipline, focus training, Max Erfodimo, personal development',
    alternates: {
        canonical: 'https://maxerfodimo.com/program',
    },
    openGraph: {
        title: 'Focus Programs - 12-Day Program by Max Erfodimo',
        description: 'Join our 12-day focus program designed to help you achieve your goals.',
        url: 'https://maxerfodimo.com/program',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Focus Programs - 12-Day Program by Max Erfodimo',
        description: 'Join our 12-day focus program designed to help you achieve your goals.',
    },
}

export default function ProgramLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

