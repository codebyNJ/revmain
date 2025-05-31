"use client"

import { useState } from "react"
import { ChevronRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { cn } from "@/lib/utils"

const sampleAds = [
  {
    id: 1,
    title: "Coffee Shop",
    description: "Premium coffee at ₹69 only",
    image: "/images/ad-coffee.jpg",
    color: "from-amber-500 to-red-500",
  },
  {
    id: 2,
    title: "Food Delivery",
    description: "50% off on your first order",
    image: "/images/ad-food.jpg",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Movie Tickets",
    description: "Book now and get 20% cashback",
    image: "/images/ad-movie.jpg",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 4,
    title: "Fashion Sale",
    description: "End of season sale - Up to 70% off",
    image: "/images/ad-fashion.jpg",
    color: "from-pink-500 to-rose-500",
  },
]

export default function CultureExperience() {
  const [selectedAd, setSelectedAd] = useState(sampleAds[0])

  return (
    <section id="culture" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation className="text-center mb-12 md:mb-12">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm font-medium mb-8">
              <Users className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Culture Experience
            </div>
          </ScrollAnimation>

          <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 items-center">
            <div className="order-2 lg:order-1 px-2 md:px-0">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900 leading-relaxed">
                  3 lakh+ auto rickshaws just in Namma Bengaluru.
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
                  What if every auto could play your ad and every click is real human zero bots?
                </p>
              </ScrollAnimation>

              <div className="mt-6 md:mt-8">
                <ScrollAnimation delay={0.6}>
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-6 text-gray-800">Available Ads</h4>
                </ScrollAnimation>

                <div className="space-y-4 max-h-[280px] md:max-h-[300px] overflow-y-auto pr-2">
                  {sampleAds.map((ad, index) => (
                    <ScrollAnimation key={ad.id} delay={0.8 + index * 0.1}>
                      <div
                        onClick={() => setSelectedAd(ad)}
                        className={cn(
                          "p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between",
                          selectedAd.id === ad.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50",
                        )}
                      >
                        <div>
                          <h5 className="font-medium text-gray-900 text-sm md:text-base">{ad.title}</h5>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">{ad.description}</p>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 md:h-5 md:w-5 transition-colors flex-shrink-0 ml-3",
                            selectedAd.id === ad.id ? "text-blue-500" : "text-gray-400",
                          )}
                        />
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>

            <ScrollAnimation
              delay={0.3}
              direction="right"
              className="flex justify-center order-1 lg:order-2 px-4 md:px-0"
            >
              <div className="relative">
                <div className="relative w-[260px] md:w-[300px] lg:w-[320px] h-[360px] md:h-[420px] lg:h-[440px] bg-gray-800 rounded-[28px] md:rounded-[32px] lg:rounded-[36px] p-2 md:p-3 shadow-xl">
                  <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] lg:rounded-[36px] border-[8px] md:border-[10px] lg:border-[12px] border-gray-800 pointer-events-none z-10"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center z-20">
                    <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full border-2 border-gray-600"></div>
                  </div>
                  <div className="absolute top-2 md:top-3 lg:top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-gray-600 z-20"></div>
                  <div className="w-full h-full rounded-[20px] md:rounded-[22px] lg:rounded-[24px] overflow-hidden bg-white">
                    <div className="w-full h-full flex flex-col">
                      <div className="flex-1 p-3 md:p-4 flex flex-col">
                        <div
                          className={cn(
                            "w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-r",
                            selectedAd.color,
                          )}
                        >
                          <div className="text-center p-3 md:p-4 text-white">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">{selectedAd.title}</h3>
                            <p className="text-white/90 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                              {selectedAd.description}
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs"
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="h-8 md:h-10 lg:h-12 border-t border-gray-200 flex items-center justify-between px-3 md:px-4">
                        <Button variant="ghost" size="sm" className="text-xs">
                          Previous
                        </Button>
                        <div className="flex space-x-1">
                          {sampleAds.map((ad) => (
                            <div
                              key={ad.id}
                              className={cn(
                                "w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full",
                                selectedAd.id === ad.id ? "bg-blue-500" : "bg-gray-300",
                              )}
                            />
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs md:text-sm text-gray-600">Smart Ad Management System</p>
                  <p className="text-xs text-gray-500 mt-1">Click on an ad to load it on the device</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
