import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { 
    label: 'Solutions', 
    href: '#services',
    dropdown: [
      { label: 'Virtual Office', href: '/virtual-office' },
      { label: 'Coworking Spaces', href: '/coworking' },
      { label: 'Meeting Rooms', href: '/meeting-rooms' },
      { label: 'CA Services', href: '/ca-services' },
    ]
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-100/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-text' : 'text-text'}`}>
              Ease<span className="text-primary">My</span>Office
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text-light hover:text-primary rounded-lg hover:bg-primary-50 transition-all"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.dropdown && (
                  <div 
                    className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-card border border-gray-100 p-2 min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8882735038"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-light hover:text-primary rounded-lg hover:bg-primary-50 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>888-273-5038</span>
            </a>
            <a
              href="#hero"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text hover:text-primary rounded-lg hover:bg-primary-50 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-text-light hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-gray-100 space-y-2">
              <a
                href="tel:8882735038"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-text-light hover:text-primary rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                888-273-5038
              </a>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
