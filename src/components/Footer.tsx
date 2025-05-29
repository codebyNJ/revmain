import { Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <img src="/logo-removebg-preview.png" alt="REV Logo" className="h-8 w-auto" />
            <div>
              <p className="text-sm text-[#8B8B8B]">Movement is the New Presence</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#131313]">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#ea590d]" />
                <span className="text-sm text-[#8B8B8B]">hello@revads.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#ea590d]" />
                <span className="text-sm text-[#8B8B8B]">+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#131313]">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#ea590d] transition-colors text-[#8B8B8B]">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-[#ea590d] transition-colors text-[#8B8B8B]">
                Terms of Service
              </a>
              <a href="#" className="block hover:text-[#ea590d] transition-colors text-[#8B8B8B]">
                Support
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-[#8B8B8B]">© 2025 REV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
