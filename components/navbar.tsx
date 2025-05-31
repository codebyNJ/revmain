"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 pt-3 md:pt-6">
        <nav className="flex items-center justify-center">
          <div
            className={cn(
              "flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full px-3 md:px-8 py-1 md:py-3 shadow-lg transition-all duration-300 w-full max-w-md md:max-w-none md:w-auto",
              isScrolled ? "shadow-xl" : "shadow-lg",
            )}
          >
            {/* Mobile Logo (Centered) */}
            <div className="md:hidden absolute left-0 right-0 mx-auto flex justify-center pointer-events-none">
              <img src="/images/rev-logo.png" alt="REV" className="h-7 w-auto" />
            </div>

            {/* Desktop Logo (Left-aligned) */}
            <Link href="/" className="hidden md:block md:mr-8">
              <img src="/images/rev-logo.png" alt="REV" className="h-8 w-auto" />
            </Link>

            {/* Invisible spacer for mobile to maintain layout */}
            <div className="w-4 h-4 md:hidden"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("culture")}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Why REV
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("pilot")}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Pilot Result
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-gray-700 hover:text-gray-900 transition-colors z-10"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 mx-auto max-w-md">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("culture")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Why REV
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("pilot")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Pilot Results
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
