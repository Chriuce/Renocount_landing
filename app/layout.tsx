import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renocount - Construction Site Management via WhatsApp',
  description: 'Renocount helps construction teams report tasks, hours, and photos directly through WhatsApp – no logins, no training.',
  keywords: 'construction management, WhatsApp, site management, construction app',
  authors: [{ name: 'Renocount' }],
  openGraph: {
    title: 'Renocount - Construction Site Management via WhatsApp',
    description: 'Renocount helps construction teams report tasks, hours, and photos directly through WhatsApp – no logins, no training.',
    url: 'https://renocount.com',
    siteName: 'Renocount',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renocount - Construction Site Management via WhatsApp',
    description: 'Renocount helps construction teams report tasks, hours, and photos directly through WhatsApp – no logins, no training.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 