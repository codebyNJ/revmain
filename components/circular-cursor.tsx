"use client"
import { useEffect, useState } from "react"

export default function CircularCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition)

    // Add event listeners for hover states on interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer, input, textarea, select',
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#E65723] rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Outer cursor ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#E65723] rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
    </>
  )
}
