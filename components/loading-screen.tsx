"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 3 // Faster increment

        if (newProgress >= 100) {
          clearInterval(timer)
          // Call completion callback after a short delay
          setTimeout(() => {
            onLoadingComplete()
          }, 300)
          return 100
        }

        return newProgress
      })
    }, 60) // Slightly faster interval

    // Cleanup function
    return () => {
      clearInterval(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img src="/images/rev-logo.png" alt="REV" className="h-16 md:h-20 w-auto mx-auto mb-4" />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            REV
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            India's First Smart Street Layer
          </motion.p>
        </motion.div>

        <div className="w-64 md:w-80 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full h-2"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            Loading... {Math.round(progress)}%
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
