import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Illinois MicroTech | UIUC MEMS & Microtechnology RSO',
  description: 'Bringing experiences in MEMS and microtechnology to the undergraduate student population at the University of Illinois Urbana-Champaign.',
  keywords: ['MEMS', 'microtechnology', 'UIUC', 'RSO', 'engineering', 'cleanroom', 'HackerFab', 'Illinois'],
  authors: [{ name: 'Illinois MicroTech' }],
  openGraph: {
    title: 'Illinois MicroTech',
    description: 'UIUC\'s premier MEMS and microtechnology student organization',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
