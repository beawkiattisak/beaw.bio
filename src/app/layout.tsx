import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'beaw.bio',
  description: 'beaw.bio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
      <link rel="icon" href="/favicon.ico" />
      <meta />
      <meta property="og:image" content="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
