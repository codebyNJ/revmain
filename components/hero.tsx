"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect } from "react"

// Declare Tally global types
declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: PopupOptions) => void;
      closePopup: (formId: string) => void;
    };
  }
}

type PopupOptions = {
  key?: string;
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any;
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
};

export default function Hero() {
  const formId = 'mKZGE7';

  useEffect(() => {
    // Load Tally script if not already loaded
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleStartJourney = () => {
    // Check if Tally is loaded
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.openPopup(formId, {
        layout: 'modal',
        width: 700,
        overlay: true,
        onOpen: () => {
          console.log('Form opened');
        },
        onClose: () => {
          console.log('Form closed');
        },
        onSubmit: (payload: any) => {
          console.log('Form submitted:', payload);
          // Handle form submission here
        }
      });
    } else {
      // Fallback if Tally hasn't loaded yet
      console.warn('Tally not loaded yet');
      // You could show a loading message or retry after a delay
      setTimeout(() => {
        if (window.Tally) {
          window.Tally.openPopup(formId, {
            layout: 'modal',
            width: 700,
            overlay: true
          });
        }
      }, 1000);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/auto-rickshaw-ad.png"
          alt="Auto rickshaw with digital advertisement"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-5" />

      {/* Dotted pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "15px 15px",
        }}
      />

      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm md:text-sm mb-4"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            India's First Digital Revolution
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight px-2"
          >
            <span className="block">India&apos;s First</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Smart Street Layer
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Transform every street into a <span className="text-blue-300 font-semibold">measurable</span>,{" "}
          <span className="text-green-300 font-semibold">intelligent</span> advertising platform
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={handleStartJourney}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 text-white text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Start your Journey
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}