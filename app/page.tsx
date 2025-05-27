"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  ArrowRight,
  Play,
  Users,
  MapPin,
  Zap,
  BarChart3,
  Menu,
  X,
  Target,
  Clock,
  Shield,
  Home,
  Phone,
  Mail,
  MessageSquare,
  Camera,
  TrendingUp,
  Activity,
  Eye,
  Rocket,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function RevWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const bentoRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const words = [
    { text: "everyone", color: "text-orange-600" },
    { text: "everywhere", color: "text-green-600" },
    { text: "everytime", color: "text-blue-600" },
  ]

  // Smooth scroll function with proper offset for navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 120 // Account for fixed navbar height
      const elementPosition = element.offsetTop - navHeight

      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: elementPosition, autoKill: false },
        ease: "power2.inOut",
      })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Typing effect for cycling words with proper line handling
    const typeWord = (word: string) => {
      setIsTyping(true)
      setDisplayedText("")

      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= word.length) {
          setDisplayedText(word.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
          // Wait 2 seconds before starting next word
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }, 2000)
        }
      }, 100) // Typing speed

      return () => clearInterval(typingInterval)
    }

    const currentWord = words[currentWordIndex].text
    const cleanup = typeWord(currentWord)

    return cleanup
  }, [currentWordIndex])

  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger)

    // Enhanced navbar animation on scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "150px top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (navRef.current) {
          gsap.to(navRef.current, {
            y: self.direction === -1 ? 0 : -120,
            duration: 0.4,
            ease: "power2.out",
          })
        }
      },
    })

    // Professional Hero animations
    const tl = gsap.timeline()

    // Badge entrance with subtle bounce
    tl.from(".hero-badge", {
      y: -50,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
    })

      // Title entrance with elegant slide
      .from(
        ".hero-title",
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.6",
      )

      // Subtitle with smooth fade
      .from(
        ".hero-subtitle",
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.8",
      )

      // CTA buttons with professional entrance
      .from(
        ".hero-cta .btn-1",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        ".hero-cta .btn-2",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      )

    // Enhanced bento grid animations
    gsap.fromTo(
      ".bento-item",
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bentoRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Contact section animation
    gsap.fromTo(
      ".contact-item",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Stats counter animation
    gsap.fromTo(
      ".stat-number",
      { textContent: 0 },
      {
        textContent: (i, target) => target.getAttribute("data-value"),
        duration: 2.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Subtle background animations
    gsap.to(".hero-glow", {
      scale: 1.05,
      opacity: 0.7,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Professional background animations
    gsap.to(".geometric-shape", {
      rotation: "+=360",
      duration: 60,
      ease: "none",
      repeat: -1,
    })

    gsap.to(".corner-accent", {
      scale: 1.1,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })
  }, [])

  const handleHover = (e: React.MouseEvent) => {
    const target = e.currentTarget
    gsap.to(target, {
      scale: 1.02,
      y: -3,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleHoverOut = (e: React.MouseEvent) => {
    const target = e.currentTarget
    gsap.to(target, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const CustomDashboard = ({ type }: { type: string }) => {
    if (type === "tracking") {
      return (
        <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Real-time Ad Tracking - Bangalore</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">Total Impressions</span>
              </div>
              <div className="text-3xl font-bold text-blue-400">3,247,891</div>
              <div className="text-green-400 text-sm">+15.2% from yesterday</div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">Click Rate</span>
              </div>
              <div className="text-3xl font-bold text-green-400">4.7%</div>
              <div className="text-green-400 text-sm">Above industry avg</div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <Activity className="w-5 h-5 text-red-400" />
                <span className="text-gray-300 text-sm">Active Screens</span>
              </div>
              <div className="text-3xl font-bold text-red-400">1,847</div>
              <div className="text-green-400 text-sm">99.1% uptime</div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-white">Live Route Tracking - Bangalore</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { route: "MG Road", status: "Active", ads: 34, color: "green" },
                { route: "Brigade Road", status: "Active", ads: 28, color: "green" },
                { route: "Koramangala", status: "Maintenance", ads: 0, color: "red" },
                { route: "Indiranagar", status: "Active", ads: 42, color: "green" },
                { route: "Whitefield", status: "Active", ads: 19, color: "green" },
                { route: "Electronic City", status: "Active", ads: 25, color: "green" },
                { route: "Jayanagar", status: "Warning", ads: 12, color: "yellow" },
                { route: "HSR Layout", status: "Active", ads: 31, color: "green" },
              ].map((route, index) => (
                <div key={index} className="bg-black p-3 rounded border border-gray-600">
                  <div className="text-white font-medium text-sm">{route.route}</div>
                  <div className={`text-${route.color}-400 text-xs`}>{route.status}</div>
                  <div className="text-gray-400 text-xs">{route.ads} ads running</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (type === "location") {
      return (
        <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Location Targeting - Bangalore Metro</h3>
            <div className="text-blue-400 text-sm">Karnataka Region</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-white">Top Performing Areas</h4>
              <div className="space-y-3">
                {[
                  { area: "UB City Mall", engagement: "9.1%", color: "green" },
                  { area: "Forum Mall", engagement: "8.4%", color: "green" },
                  { area: "Orion Mall", engagement: "7.6%", color: "blue" },
                  { area: "Phoenix MarketCity", engagement: "6.8%", color: "blue" },
                  { area: "Mantri Square", engagement: "5.9%", color: "red" },
                  { area: "Garuda Mall", engagement: "5.2%", color: "red" },
                ].map((area, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{area.area}</span>
                    <span className={`text-${area.color}-400 font-semibold`}>{area.engagement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-white">Bangalore Demographics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Tech Professionals</span>
                    <span className="text-blue-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Students</span>
                    <span className="text-green-400">28%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Business Professionals</span>
                    <span className="text-red-400">27%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: "27%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-white">Heat Map - Peak Hours (Bangalore Traffic)</h4>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{i}:00</div>
                  <div
                    className={`h-8 rounded ${
                      (i >= 8 && i <= 11) || (i >= 18 && i <= 21)
                        ? "bg-red-500"
                        : i >= 12 && i <= 17
                          ? "bg-green-500"
                          : "bg-blue-500"
                    }`}
                    style={{
                      opacity: i >= 6 && i <= 23 ? 0.8 : 0.3,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6 mt-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-300">Peak Traffic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-300">Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-gray-300">Low Traffic</span>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (type === "reporting") {
      return (
        <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Transparent Reporting - Bangalore Network</h3>
            <div className="text-green-400 text-sm">100% Verified Data</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-white">Screen Health Status</h4>
              <div className="space-y-4">
                {[
                  { screen: "BLR-001 (MG Road)", status: "Online", uptime: "99.9%", color: "green" },
                  { screen: "BLR-002 (Brigade)", status: "Online", uptime: "98.7%", color: "green" },
                  { screen: "BLR-003 (Koramangala)", status: "Maintenance", uptime: "0%", color: "red" },
                  { screen: "BLR-004 (Indiranagar)", status: "Online", uptime: "99.2%", color: "green" },
                  { screen: "BLR-005 (Whitefield)", status: "Warning", uptime: "87.3%", color: "yellow" },
                  { screen: "BLR-006 (Electronic City)", status: "Online", uptime: "96.8%", color: "green" },
                ].map((screen, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-black rounded border border-gray-600"
                  >
                    <span className="text-gray-300">{screen.screen}</span>
                    <div className="flex items-center space-x-3">
                      <span className={`text-${screen.color}-400 text-sm`}>{screen.status}</span>
                      <span className="text-gray-400 text-sm">{screen.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-white">Verification Metrics</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">GPS Verified Routes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">99.4%</div>
                  <div className="text-gray-300 text-sm">Timestamp Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">0.6%</div>
                  <div className="text-gray-300 text-sm">False Impressions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-white">Real-time Verification Log - Bangalore</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {[
                { time: "16:45:23", event: "BLR-001 - Ad impression verified at MG Road Metro", status: "success" },
                { time: "16:45:19", event: "GPS location confirmed - Brigade Road Junction", status: "success" },
                { time: "16:45:15", event: "BLR-003 - Maintenance mode activated in Koramangala", status: "warning" },
                {
                  time: "16:45:12",
                  event: "Route validation completed - Indiranagar to Whitefield",
                  status: "success",
                },
                { time: "16:45:08", event: "BLR-004 - High engagement detected near Forum Mall", status: "info" },
                { time: "16:45:04", event: "Timestamp synchronization verified across network", status: "success" },
                { time: "16:45:01", event: "BLR-006 - Electronic City route optimization complete", status: "success" },
              ].map((log, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-xs p-2 bg-black rounded border border-gray-600"
                >
                  <span className="text-gray-500">{log.time}</span>
                  <span className="text-gray-300 flex-1">{log.event}</span>
                  <span
                    className={`
                    ${log.status === "success" ? "text-green-400" : ""}
                    ${log.status === "warning" ? "text-red-400" : ""}
                    ${log.status === "info" ? "text-blue-400" : ""}
                  `}
                  >
                    ●
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  const DashboardModal = ({ type, title, isOpen, onClose }: any) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <CustomDashboard type={type} />
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen bg-[#fff1d6] text-[#131313] overflow-x-hidden">
      {/* Enhanced Centered Navigation with Functional Buttons */}
      <nav
        ref={navRef}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#131313] rounded-full px-8 py-4 shadow-2xl"
      >
        <div className="flex items-center space-x-8">
          {/* Bigger Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="REV Logo"
              width={60}
              height={60}
              className="w-50 h-50 sm:w-12 sm:h-12 object-contain filter invert"
            />
          
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection("home")} className="group relative p-2">
              <Home className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#131313] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Home
              </div>
            </button>
            <button onClick={() => scrollToSection("problem")} className="group relative p-2">
              <Target className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#131313] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Problem
              </div>
            </button>
            <button onClick={() => scrollToSection("solution")} className="group relative p-2">
              <Zap className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#131313] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Solution
              </div>
            </button>
            <button onClick={() => scrollToSection("results")} className="group relative p-2">
              <BarChart3 className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#131313] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Results
              </div>
            </button>
            <button onClick={() => scrollToSection("contact")} className="group relative p-2">
              <MessageSquare className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#131313] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Contact
              </div>
            </button>
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-6 py-2 text-sm font-semibold"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#131313] rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/70 hover:text-orange-400 transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("problem")}
                className="text-white/70 hover:text-orange-400 transition-colors py-2 text-left"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-white/70 hover:text-orange-400 transition-colors py-2 text-left"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-white/70 hover:text-orange-400 transition-colors py-2 text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/70 hover:text-orange-400 transition-colors py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* iPad Mockup Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 bg-[#fff1d6]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          {/* iPad Mockup Container */}
          <div className="relative mx-auto" style={{ maxWidth: "900px" }}>
            {/* iPad Frame */}
            <div className="relative bg-gray-800 rounded-[3rem] p-4 shadow-2xl">
              {/* iPad Screen Bezel */}
              <div className="bg-black rounded-[2.5rem] p-8 relative overflow-hidden">
                {/* iPad Camera */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>

                {/* iPad Screen Content - The Ad */}
                <div className="bg-[#fff1d6] rounded-[1.5rem] overflow-hidden relative min-h-[600px] flex items-center justify-center">
                  {/* Professional Background Pattern */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Dot Grid Pattern */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle, rgba(19, 19, 19, 0.1) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-10 left-10 w-20 h-20 border border-orange-200/30 rounded-full geometric-shape"></div>
                    <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-lg rotate-12 geometric-shape"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-green-200/20 rounded-lg rotate-45 geometric-shape"></div>
                    <div className="absolute bottom-16 right-12 w-12 h-12 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full geometric-shape"></div>

                    {/* Subtle Lines */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/20 to-transparent"></div>
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/20 to-transparent"></div>
                    <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300/20 to-transparent"></div>
                    <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300/20 to-transparent"></div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-300/40 rounded-tl-lg corner-accent"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-300/40 rounded-tr-lg corner-accent"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-300/40 rounded-bl-lg corner-accent"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-300/40 rounded-br-lg corner-accent"></div>
                  </div>

                  {/* Subtle Background Gradient Overlay */}
                  <div className="hero-glow absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/20"></div>

                  <div className="max-w-4xl mx-auto px-6 text-center relative z-10 py-12">
                    <Badge className="hero-badge bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold mb-6 md:mb-8 rounded-full shadow-xl">
                      🚀 Phase 1 Live • 4% CTR Achieved
                    </Badge>

                    <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 leading-tight">
                      <span className="text-[#131313]">REACH </span>
                      <span
                        className={`${words[currentWordIndex].color} inline-block`}
                        style={{ minWidth: "200px", textAlign: "left" }}
                      >
                        {displayedText}
                        {isTyping && <span className="animate-pulse text-[#131313]">|</span>}
                      </span>
                    </h1>

                    <p className="hero-subtitle text-sm sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto font-bold opacity-90">
                      Movement is the new presence
                    </p>

                    <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                      <Button
                        size="lg"
                        className="btn-1 bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold shadow-xl rounded-full"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                        onClick={() => scrollToSection("contact")}
                      >
                        <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        Start Your Campaign
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="btn-2 border-2 border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-[#fff1d6] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-full shadow-xl"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                      >
                        <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        Watch Demo
                      </Button>
                    </div>

                    {/* Mini Auto-rickshaw Animation */}
                    <div className="absolute bottom-4 right-4 opacity-60">
                      <div className="w-12 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                        <span className="text-xs font-bold text-black">🛺</span>
                      </div>
                    </div>

                    {/* Ad Playing Indicator */}
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-[#131313]">AD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPad Home Button */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* iPad Stand/Base */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-300 rounded-full opacity-30 blur-sm"></div>
          </div>

          {/* Context Text Below iPad */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#131313] mb-4">
              This is how your ad looks on our <span className="text-orange-600">street-level screens</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Real ads, real rides, real results — powered by India's first unified digital network
            </p>

            {/* Quick Stats Below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-orange-600 mb-2">1₹</div>
                <p className="text-sm font-semibold text-gray-700">Per Second</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-green-600 mb-2">4%</div>
                <p className="text-sm font-semibold text-gray-700">Click Rate</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-2">100%</div>
                <p className="text-sm font-semibold text-gray-700">Real Attention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section with #fff1d6 Background */}
      <section ref={bentoRef} className="py-20 px-4 md:px-6 bg-[#fff1d6]">
        <div className="max-w-7xl mx-auto">
          {/* Problem & Solution Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
            {/* Problem - Large Section */}
            <div
              id="problem"
              className="bento-item lg:col-span-2 p-6 md:p-10 bg-[#131313] border border-gray-600 hover:border-red-500 transition-all duration-300 rounded-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Badge className="bg-red-600 text-white mb-3 px-4 py-1 rounded-full">THE PROBLEM</Badge>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#fff1d6] mb-4">
                    Why Indian Physical Advertising Is <span className="text-red-400">Broken</span>
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-lg text-[#fff1d6]/80">
                <p>
                  From flyover banners to wall posters to LED screens with{" "}
                  <span className="text-red-400 font-bold">no logic</span> — India's physical ad ecosystem is chaotic,
                  overpriced, and utterly disconnected.
                </p>
                <p className="font-semibold text-[#fff1d6]">
                  No central logic, <span className="text-red-400">no metrics</span>, no grid.
                </p>
                <p className="text-xl font-bold text-red-400">
                  It's 2025 — and your city's attention is still running on{" "}
                  <span className="text-red-500">1997 logic</span>.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className="bento-item p-4 md:p-8 bg-[#131313] border border-gray-600 hover:border-blue-500 transition-all duration-300 rounded-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <Badge className="bg-blue-600 text-white mb-6 px-4 py-1 rounded-full">PILOT RESULTS</Badge>
              <div className="stats-grid space-y-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-400 mb-3">
                    <span className="stat-number" data-value="30">
                      0
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#fff1d6]">Days to Deploy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-green-400 mb-3">
                    <span className="stat-number" data-value="4">
                      0
                    </span>
                    %
                  </div>
                  <p className="text-sm font-semibold text-[#fff1d6]">Click-through Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-red-400 mb-3">
                    <span className="stat-number" data-value="100">
                      0
                    </span>
                    %
                  </div>
                  <p className="text-sm font-semibold text-[#fff1d6]">Real Attention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution, Pricing & Pilot Images Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
            {/* Solution */}
            <div
              id="solution"
              className="bento-item lg:col-span-2 p-6 md:p-10 bg-[#131313] border border-gray-600 hover:border-green-500 transition-all duration-300 rounded-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Badge className="bg-green-600 text-white mb-3 px-4 py-1 rounded-full">THE SOLUTION</Badge>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#fff1d6] mb-4">
                    UDN — <span className="text-green-400">Unified Digital Network</span>
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-[#fff1d6]">
                <p className="text-lg">
                  REV is creating a <span className="text-green-400 font-bold">connected, verifiable, intelligent</span>{" "}
                  media layer across India's streets.
                </p>
                <p className="text-xl font-bold text-[#fff1d6]">
                  A moving grid of <span className="text-blue-400">smart, local, real-world screens</span> — starting
                  with auto-rickshaws.
                </p>
                <p className="text-lg font-semibold text-green-400">
                  The kind of network where brands don't <span className="text-red-400">guess</span> visibility — they{" "}
                  <span className="text-green-400">measure</span> it.
                </p>
              </div>
            </div>

            {/* Pilot Images */}
            <div
              className="bento-item p-4 md:p-8 bg-[#131313] border border-gray-600 hover:border-purple-500 transition-all duration-300 rounded-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div className="flex items-center space-x-2 mb-6">
                <Camera className="w-6 h-6 text-purple-400" />
                <Badge className="bg-purple-600 text-white px-4 py-1 rounded-full">PILOT PHASE</Badge>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Pilot 1"
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Pilot 2"
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                  <div className="w-20 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-[#fff1d6] text-center">Live deployment footage</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div
              className="bento-item p-6 md:p-10 bg-[#131313] border border-gray-600 hover:border-purple-500 transition-all duration-300 rounded-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <Badge className="bg-purple-600 text-white mb-6 px-4 py-1 rounded-full">REVOLUTIONARY PRICING</Badge>
              <div className="text-center mb-8">
                <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-purple-400 mb-3">1₹</div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#fff1d6]">Per Second. Per Slot.</p>
                <p className="text-sm opacity-80 mt-3 text-[#fff1d6]/70">
                  That's not a gimmick. That's <span className="text-green-400">true cost-efficiency</span>.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800 border border-gray-600 rounded-2xl">
                  <span className="font-semibold text-[#fff1d6]">1p/sec</span>
                  <span className="text-purple-400 font-bold">₹18/hour</span>
                </div>
                <p className="text-sm text-center opacity-80 text-[#fff1d6]/70">
                  No <span className="text-red-400">fake clicks</span>. No{" "}
                  <span className="text-red-400">unverifiable impressions</span>. Just{" "}
                  <span className="text-green-400">real eyes</span> on <span className="text-blue-400">real rides</span>
                  .
                </p>
              </div>
            </div>

            {/* Interactive Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: "Realtime Tracking",
                  desc: "GPS-enabled route tracking",
                  modalType: "tracking",
                  color: "blue",
                },
                {
                  icon: Target,
                  title: "Location Targeting",
                  desc: "Precision audience reach",
                  modalType: "location",
                  color: "green",
                },
                {
                  icon: Shield,
                  title: "Transparent Reporting",
                  desc: "Verifiable impressions",
                  modalType: "reporting",
                  color: "red",
                },
                {
                  icon: Clock,
                  title: "Per-second Billing",
                  desc: "Granular cost control",
                  modalType: null,
                  color: "purple",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bento-item p-6 bg-[#131313] border border-gray-600 hover:border-${feature.color}-500 transition-all duration-300 rounded-2xl ${
                    feature.modalType ? "cursor-pointer" : ""
                  }`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                  onClick={() => feature.modalType && setActiveModal(feature.modalType)}
                >
                  <div
                    className={`w-10 h-10 bg-${feature.color}-600 rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-[#fff1d6]">{feature.title}</h3>
                  <p className="text-xs opacity-80 text-[#fff1d6]/70">{feature.desc}</p>
                  {feature.modalType && (
                    <p className={`text-xs text-${feature.color}-400 mt-2 font-semibold`}>Click to view dashboard</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* System Features */}
          <div
            id="results"
            className="bento-item p-6 md:p-10 bg-[#131313] border border-gray-600 hover:border-orange-500 transition-all duration-300 rounded-3xl"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <Badge className="bg-orange-600 text-white mb-6 px-4 py-1 rounded-full">THE SYSTEM</Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-[#fff1d6]">
              Not Just Screens. A <span className="text-orange-400">System</span>.
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 md:mb-8 font-semibold text-[#fff1d6]">
              REV is built like an <span className="text-blue-400">API</span> for the street:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-6 bg-gray-800 border border-gray-600 rounded-2xl">
                <MapPin className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <p className="font-semibold text-[#fff1d6]">
                  <span className="text-green-400">Realtime-tracking</span> system
                </p>
              </div>
              <div className="text-center p-6 bg-gray-800 border border-gray-600 rounded-2xl">
                <Zap className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <p className="font-semibold text-[#fff1d6]">
                  System <span className="text-blue-400">health checks</span>
                </p>
              </div>
              <div className="text-center p-6 bg-gray-800 border border-gray-600 rounded-2xl">
                <Users className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <p className="font-semibold text-[#fff1d6]">
                  <span className="text-red-400">Region based</span> reach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4 md:px-6 bg-[#fff1d6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="contact-item text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 text-[#131313]">
              Ready to Ride With Us?
            </h2>
            <div className="contact-item space-y-4 text-xl mb-12 text-[#131313]">
              <p>You've seen the problem. You've seen the grid.</p>
              <p className="font-bold">The street is waking up. REV is rolling.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            {/* For Brands */}
            <Card
              className="contact-item p-6 md:p-10 bg-orange-600 text-white border-0 rounded-3xl hover:bg-orange-700 transition-all duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Are you a brand?</h3>
              <p className="mb-6 md:mb-8 text-base sm:text-lg opacity-90">
                Claim early access slots and be among the first to advertise on our network.
              </p>

              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 w-full font-semibold rounded-xl py-4 text-lg shadow-lg"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                Claim Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>

            {/* For Investors */}
            <Card
              className="contact-item p-6 md:p-10 bg-[#131313] text-white border-0 rounded-3xl hover:bg-gray-900 transition-all duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Are you an investor?</h3>
              <p className="mb-6 md:mb-8 text-base sm:text-lg opacity-90">
                Explore the deeper REV layer and discover the potential of street-level advertising.
              </p>

              <Button
                size="lg"
                className="bg-orange-600 text-white hover:bg-orange-700 w-full font-semibold rounded-xl py-4 text-lg shadow-lg"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                Schedule Meeting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#131313]/20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="REV Logo" width={60} height={30} />
              <div>
                <h4 className="font-bold text-lg">REV</h4>
                <p className="text-sm opacity-60">Movement is the New Presence</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#131313]">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span className="text-sm">hello@revads.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#131313]">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-orange-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-orange-600 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-orange-600 transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#131313]/10 text-center">
            <p className="text-sm opacity-60">© 2024 REV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Dashboard Modals */}
      <DashboardModal
        type="tracking"
        title="REV Dashboard - Real-time Ad Tracking (Bangalore)"
        isOpen={activeModal === "tracking"}
        onClose={() => setActiveModal(null)}
      />

      <DashboardModal
        type="location"
        title="REV Dashboard - Location Targeting (Bangalore)"
        isOpen={activeModal === "location"}
        onClose={() => setActiveModal(null)}
      />

      <DashboardModal
        type="reporting"
        title="REV Dashboard - Transparent Reporting (Bangalore)"
        isOpen={activeModal === "reporting"}
        onClose={() => setActiveModal(null)}
      />
    </div>
  )
}
