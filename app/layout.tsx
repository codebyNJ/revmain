import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REV',
  description: 'Movement is the New Presence',
  generator: 'nijeesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
