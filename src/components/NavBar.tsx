"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Home, Target, Cpu, DollarSign, MessageSquare } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface NavBarProps {
  scrollToSection: (sectionId: string) => void
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Ultra smooth navbar hide/show
    ScrollTrigger.create({
      trigger: "body",
      start: "150px top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: self.direction === -1 ? 0 : -120,
            duration: 0.8,
            ease: "power3.out",
          })
        }
      },
    })

    // Smooth scroll behavior for the entire page
    gsap.set("html", { scrollBehavior: "auto" })
  }, [])

  const navigationItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "Problem", id: "problem", icon: Target },
    { label: "Tech", id: "tech", icon: Cpu },
    { label: "Pricing", id: "pricing", icon: DollarSign },
    { label: "Contact", id: "contact", icon: MessageSquare },
  ]

  return (
    <>
      {/* Desktop Navigation - Traditional */}
      <nav
        ref={navRef}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md shadow-sm border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo-removebg-preview.png" alt="REV Logo" className="h-10 w-auto" />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="flex items-center space-x-12">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#131313] hover:text-[#ea590d] transition-all duration-300 text-lg font-semibold relative group"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea590d] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="bg-[#ea590d] text-white hover:bg-[#d14d0a] hover:scale-105 rounded-lg px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("contact")}
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Traditional Top Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo-removebg-preview.png" alt="REV Logo" className="h-6 w-auto" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#131313]" />
              ) : (
                <Menu className="w-6 h-6 text-[#131313]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-[#fdfbf7]/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex items-center space-x-3 p-3 text-[#131313] hover:bg-[#ea590d]/10 hover:text-[#ea590d] transition-all duration-300 rounded-xl text-left"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  className="w-full bg-[#ea590d] text-white hover:bg-[#d14d0a] py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  onClick={() => {
                    scrollToSection("contact")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Navigation Spacer */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}

export default NavBar
