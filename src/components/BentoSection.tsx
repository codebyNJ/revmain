import { useRef, useEffect } from 'react';
import { Target, Zap, MapPin, BarChart3, Users, Camera, Play, Shield, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from './ui/Badge';

interface BentoSectionProps {
  setActiveModal: (modalType: string | null) => void;
}

const BentoSection: React.FC<BentoSectionProps> = ({ setActiveModal }) => {
  const bentoRef = useRef<HTMLDivElement>(null);

  const handleHover = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1.02,
      y: -3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHoverOut = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Enhanced bento grid animations
    gsap.fromTo(
      '.bento-item',
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Stats counter animation
    gsap.fromTo(
      '.stat-number',
      { innerHTML: 0 },
      {
        innerHTML: (i, target) => target.getAttribute('data-value'),
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
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
                From flyover banners to wall posters to LED screens with{' '}
                <span className="text-red-400 font-bold">no logic</span> — India's physical ad ecosystem is chaotic,
                overpriced, and utterly disconnected.
              </p>
              <p className="font-semibold text-[#fff1d6]">
                No central logic, <span className="text-red-400">no metrics</span>, no grid.
              </p>
              <p className="text-xl font-bold text-red-400">
                It's 2025 — and your city's attention is still running on{' '}
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
                REV is creating a <span className="text-green-400 font-bold">connected, verifiable, intelligent</span>{' '}
                media layer across India's streets.
              </p>
              <p className="text-xl font-bold text-[#fff1d6]">
                A moving grid of <span className="text-blue-400">smart, local, real-world screens</span> — starting
                with auto-rickshaws.
              </p>
              <p className="text-lg font-semibold text-green-400">
                The kind of network where brands don't <span className="text-red-400">guess</span> visibility — they{' '}
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
                    <img
                      src="https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Pilot 1"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="aspect-square bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/photos/1024662/pexels-photo-1024662.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Pilot 2"
                      className="rounded-lg object-cover w-full h-full"
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
                <span className="font-semibold text-[#fff1d6]">1₹/sec</span>
                <span className="text-purple-400 font-bold">₹18/hour</span>
              </div>
              <p className="text-sm text-center opacity-80 text-[#fff1d6]/70">
                No <span className="text-red-400">fake clicks</span>. No{' '}
                <span className="text-red-400">unverifiable impressions</span>. Just{' '}
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
                title: 'Realtime Tracking',
                desc: 'GPS-enabled route tracking',
                modalType: 'tracking',
                color: 'blue',
              },
              {
                icon: Target,
                title: 'Location Targeting',
                desc: 'Precision audience reach',
                modalType: 'location',
                color: 'green',
              },
              {
                icon: Shield,
                title: 'Transparent Reporting',
                desc: 'Verifiable impressions',
                modalType: 'reporting',
                color: 'red',
              },
              {
                icon: Clock,
                title: 'Per-second Billing',
                desc: 'Granular cost control',
                modalType: null,
                color: 'purple',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bento-item p-6 bg-[#131313] border border-gray-600 hover:border-${feature.color}-500 transition-all duration-300 rounded-2xl ${
                  feature.modalType ? 'cursor-pointer' : ''
                }`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                onClick={() => feature.modalType && setActiveModal(feature.modalType)}
              >
                <div
                  className={`w-10 h-10 bg-${feature.color === 'blue' ? 'blue-600' : feature.color === 'green' ? 'green-600' : feature.color === 'red' ? 'red-600' : 'purple-600'} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#fff1d6]">{feature.title}</h3>
                <p className="text-xs opacity-80 text-[#fff1d6]/70">{feature.desc}</p>
                {feature.modalType && (
                  <p className={`text-xs text-${feature.color === 'blue' ? 'blue-400' : feature.color === 'green' ? 'green-400' : feature.color === 'red' ? 'red-400' : 'purple-400'} mt-2 font-semibold`}>
                    Click to view dashboard
                  </p>
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
  );
};

export default BentoSection;
