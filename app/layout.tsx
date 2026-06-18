import type { Metadata } from 'next'
import { Cinzel, Cinzel_Decorative, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'
import SmoothScroll from '@/components/SmoothScroll'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel',
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Sri Shakthi Vinayani Jothichalaya | Best Astrologer in Kamanahalli',
  description: 'Pandith Chandra Babu Swami — 70+ years of Vedic wisdom in Kamanahalli, Bangalore. Expert in Jyotish, Kundali, Vastu, Numerology, and spiritual healing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable} ${inter.variable} font-inter bg-cream text-purple-900 overflow-x-hidden`}
      >
        {children}
        <ScrollReveal />
        <SmoothScroll />
      </body>
    </html>
  )
}
