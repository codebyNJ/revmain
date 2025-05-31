import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <img src="/images/rev-logo.png" alt="REV" className="h-8 w-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms & Privacy
              </Link>

              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:revnetworkspace@gmail.com" className="hover:text-gray-900 transition-colors">
                  revnetworkspace@gmail.com
                </a>
              </div>

              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919900221516" className="hover:text-gray-900 transition-colors">
                  +91 99002 21516
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            © REV Network 2025 – Built in India. Built to move.
          </div>
        </div>
      </div>
    </footer>
  )
}
