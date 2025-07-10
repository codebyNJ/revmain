"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (footerRef.current) observer.observe(footerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-white text-black py-12 lg:py-12 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
        <h1 className="font-incomplete text-4xl sm:text-3xl lg:text-4xl tracking-[0.2em] mb-8 hover:text-[#E65723] hover:scale-110 transition-all duration-300 cursor-pointer">
          REV
        </h1>

        <div className="flex justify-center gap-10 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-lg"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="w-9 h-9 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:-rotate-12 hover:drop-shadow-lg"
          >
            <Image
              src="/icons/twitter.svg"
              alt="X"
              width={32}
              height={32}
              className="w-9 h-9 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
            />
          </a>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xl sm:text-lg lg:text-xl hover:text-[#E65723] hover:scale-105 transition-all duration-300 cursor-default">
            Phone Number: +91 98765 45321
          </p>
          <p className="text-xl sm:text-lg lg:text-xl hover:text-[#E65723] hover:scale-105 transition-all duration-300 cursor-default">
            Email: revnetworkspace@gmail.com
          </p>
        </div>

        <p className="text-base sm:text-sm lg:text-base text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-default">
          Copyrights reserved by REV network
        </p>
      </div>
    </footer>
  )
}
