"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface BoxRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  boxColor?: string
  duration?: number
  className?: string
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#3b82f6",
  duration = 0.5,
  className,
}: BoxRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          right: 0,
          bottom: 4,
          background: boxColor,
          zIndex: 2,
        }}
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration, ease: "easeInOut" }}
        transformOrigin="left"
      />
      <div className={cn(className)}>{children}</div>
    </div>
  )
}
