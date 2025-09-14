import Link from "next/link"
import Image from "next/image"


export function Footer() {
  const mainLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#careers", label: "Careers" },
    { href: "#", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  const legalLinks = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
  ]

  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="ServeOnRoute Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
              <span className="text-xl font-bold text-gray-900">ServeOnRoute</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              Delivery, Reimagined. Right on Route. Fast, reliable, and transparent delivery experience built for
              people, powered by technology.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline transition-colors text-gray-700 hover:text-purple-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:underline transition-colors text-gray-700 hover:text-purple-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-700">© 2024 ServeOnRoute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
