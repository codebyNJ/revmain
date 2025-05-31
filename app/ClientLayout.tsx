"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import FloatingSpinner from "@/components/floating-spinner"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure loading completes after a maximum time
    const maxLoadingTime = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // 4 seconds max

    return () => clearTimeout(maxLoadingTime)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />}
        </AnimatePresence>

        {!isLoading && (
          <>
            {children}
            <FloatingSpinner />
          </>
        )}
      </ThemeProvider>
    </body>
  )
}
