import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Veer Photofactory - Wedding & Event Photography',
  description:
    'Professional wedding and event photography services. Capturing your precious moments with artistic vision and attention to detail.',
  keywords:
    'wedding photography, event photography, portrait photography, professional photographer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
