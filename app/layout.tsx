import './globals.css'
import type { Metadata } from 'next'
import {
  Inter,
  IBM_Plex_Mono,
} from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'

const headingFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://charan-katkam-portfolio.vercel.app'),
  title: 'Charan Katkam | Full Stack & AI Developer',
  description:
    'Full Stack Developer and AI Engineer from Hyderabad. Building intelligent web apps with React, Next.js, Python, and IBM Granite AI. Open to 2026 internships.',
  keywords: [
    'Full Stack Developer',
    'AI Engineer',
    'React',
    'Next.js',
    'Hyderabad',
    'Internship 2026',
  ],
  openGraph: {
    title: 'Charan Katkam | Full Stack & AI Developer',
    description: 'Portfolio of Charan Katkam - AI-powered web projects with measurable impact.',
    url: 'https://charan-katkam-portfolio.vercel.app',
    siteName: 'Charan Katkam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Charan Katkam Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charan Katkam | Full Stack & AI Developer',
    description: 'Portfolio of Charan Katkam - AI-powered web projects with measurable impact.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable}`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
