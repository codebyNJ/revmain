import type React from "react"
import type { Metadata } from "next"
import { Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "REV | Everything you need",
  description:
    "Growth as a service - We are REV, an engineering team that helps you solve all your software and marketing chaos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} antialiased`}>{children}</body>
    </html>
  )
}
