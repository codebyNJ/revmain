import type React from "react"
import "@/app/globals.css"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>REV - India's First Smart Street Layer</title>
        <meta name="description" content="Transform every street into a measurable, intelligent advertising platform" />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
