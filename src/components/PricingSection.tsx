"use client"

import { useRef, useEffect } from "react"
import { DollarSign, CheckCircle, Zap, BarChart3, Settings } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".pricing-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-20 px-4 md:px-6 bg-[#f8f3ec]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="pricing-item inline-flex items-center space-x-2 bg-[#ea590d] text-white px-6 py-3 rounded-full mb-8">
            <DollarSign className="w-5 h-5" />
            <span className="font-bold">REVOLUTIONARY PRICING</span>
          </div>
          <h2 className="pricing-item text-4xl md:text-6xl font-black mb-6 text-[#131313]">
            Revolutionary Pricing for <span className="text-[#ea590d]">Real Results</span>
          </h2>
          <h3 className="pricing-item text-2xl md:text-4xl font-black mb-4 text-[#131313]">
            <span className="text-[#ea590d]">60 Paise</span> Per Minute. Per Slot.
          </h3>
          <p className="pricing-item text-lg text-[#8B8B8B] max-w-4xl mx-auto mb-4">
            While others charge ₹3,000 per month per screen, REV delivers more value at just ₹799 monthly.
          </p>
          <p className="pricing-item text-xl font-bold text-[#131313] max-w-4xl mx-auto">
            No fake metrics. No hidden costs. Just real attention at revolutionary prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="pricing-item bg-[#ea590d] p-10 rounded-3xl shadow-md">
            <div className="text-center mb-8">
              <div className="text-6xl md:text-8xl font-black text-white mb-4">₹799</div>
              <div className="text-2xl font-bold text-white mb-2">Per Month</div>
              <div className="text-white/80">vs ₹3,000 industry standard</div>
            </div>
          </div>

          <div className="pricing-item">
            <h3 className="text-2xl font-bold mb-6 text-[#131313]">The REV Advantage</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 border-2 border-[#496ca1] rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#496ca1] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#131313] mb-1">73% cost savings vs. competition</h4>
                  <p className="text-sm text-[#8B8B8B]">Industry-disrupting pricing model</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-[#ea590d] rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#ea590d] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#131313] mb-1">Realtime impression tracking</h4>
                  <p className="text-sm text-[#8B8B8B]">GPS-verified, blockchain-recorded</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-[#496ca1] rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#496ca1] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#131313] mb-1">Real attention from Real people not Bots</h4>
                  <p className="text-sm text-[#8B8B8B]">100% authentic engagement</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-[#ea590d] rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#ea590d] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#131313] mb-1">Location-based targeting</h4>
                  <p className="text-sm text-[#8B8B8B]">Precision audience reach</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-[#496ca1] rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#496ca1] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#131313] mb-1">Transparent reporting</h4>
                  <p className="text-sm text-[#8B8B8B]">Complete visibility into performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-item bg-white p-12 rounded-3xl shadow-md">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-[#131313] mb-6">
              Value <span className="text-[#ea590d]">Comparison</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#ea590d] p-6 rounded-2xl text-center">
              <div className="text-3xl mb-4">💸</div>
              <h4 className="text-lg font-bold text-white mb-2">₹799/month vs ₹3,000</h4>
              <p className="text-sm text-white/80">Industry-disrupting pricing</p>
            </div>

            <div className="bg-[#496ca1] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Smart display cycles</h4>
              <p className="text-sm text-white/80">Maximum visibility per rupee</p>
            </div>

            <div className="bg-[#ea590d] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Realtime analytics</h4>
              <p className="text-sm text-white/80">Track ROI in real-time</p>
            </div>

            <div className="bg-[#496ca1] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Easy campaign control</h4>
              <p className="text-sm text-white/80">One dashboard for everything</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
