"use client"

import { motion } from "framer-motion"

export default function FloatingSpinner() {
  const text = "Reach Everyone • Reach Everywhere • Reach Everytime • "

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 pointer-events-none">
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        {/* Spinning Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0" />
            </defs>
            <text className="text-xs md:text-sm lg:text-sm font-medium fill-gray-700">
              <textPath href="#circle" className="tracking-wider">
                {text}
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Auto Rickshaw Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img
              src="/images/auto-rickshaw-icon.png"
              alt="Auto Rickshaw"
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
            />
          </div>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>
    </div>
  )
}
