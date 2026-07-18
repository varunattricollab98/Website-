import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Virtual Office', href: '/virtual-office' },
  { label: 'Locations', href: '#cities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-soft' 
          : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-lg font-bold text-text">
              Ease<span className="text-primary">My</span>Office
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-light hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:8882735038"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a2e44] text-white text-sm font-semibold rounded-lg hover:bg-[#162538] transition-colors"
            >
              <Phone className="w-4 h-4" />
              888-273-5038
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="tel:8882735038"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#1a2e44] text-white text-sm font-semibold rounded-lg"
              >
                <Phone className="w-4 h-4" />
                888-273-5038
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
