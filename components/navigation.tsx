import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="px-8 sm:px-12 lg:px-20 py-8 sm:py-6 lg:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="font-incomplete text-3xl sm:text-2xl lg:text-3xl tracking-[0.2em] text-white">REV</h1>

        {/* Mobile Menu - Simple hamburger lines */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Desktop Menu - Original SVG */}
        <div className="hidden lg:block">
          <Image
            src="/icons/menu.svg"
            alt="Menu"
            width={40}
            height={24}
            className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </nav>
  )
}
