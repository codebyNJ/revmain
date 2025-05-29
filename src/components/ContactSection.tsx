"use client"

import { useRef, useEffect } from "react"
import { ArrowRight, Rocket, Users } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".contact-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 md:px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="contact-item inline-flex items-center space-x-2 bg-[#ea590d] text-white px-6 py-3 rounded-full mb-8">
            <Rocket className="w-5 h-5" />
            <span className="font-bold">READY TO RIDE</span>
          </div>
          <h2 className="contact-item text-4xl md:text-6xl font-black mb-8 text-[#131313]">Ready to Ride With Us?</h2>
          <div className="contact-item space-y-4 text-xl mb-12 text-[#8B8B8B]">
            <p>You've seen the problem. You've seen the solution.</p>
            <p className="font-bold text-[#131313]">The street is waking up. REV is rolling.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* For Brands */}
          <div className="contact-item p-8 md:p-12 bg-[#ea590d] text-white rounded-3xl hover:bg-[#d14d0a] transition-all duration-300 cursor-pointer shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Are you a brand?</h3>
            <p className="mb-8 text-lg opacity-90">
              Claim early access slots and be among the first to advertise on our revolutionary network.
            </p>

            <button className="bg-white text-[#ea590d] hover:bg-gray-100 w-full font-bold rounded-xl py-4 text-lg shadow-lg flex items-center justify-center transition-all duration-300">
              Claim Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* For Investors */}
          <div className="contact-item p-8 md:p-12 bg-[#496ca1] text-white rounded-3xl hover:bg-[#3d5a8a] transition-all duration-300 cursor-pointer shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Are you an investor?</h3>
            <p className="mb-8 text-lg opacity-90">
              Explore the deeper REV ecosystem and discover the potential of street-level advertising.
            </p>

            <button className="bg-white text-[#496ca1] hover:bg-gray-100 w-full font-bold rounded-xl py-4 text-lg shadow-lg flex items-center justify-center transition-all duration-300">
              Schedule Meeting
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="contact-item text-center bg-gradient-to-r from-[#131313] to-[#ea590d] p-12 rounded-3xl shadow-lg">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            Join the <span className="text-white">Revolution</span>
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Be part of India's first unified digital advertising network. The future of street-level marketing starts
            here.
          </p>
          <button className="bg-white text-[#131313] hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-xl flex items-center mx-auto transition-all duration-300">
            <Rocket className="mr-3 w-6 h-6" />
            Start Your Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
