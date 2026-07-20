import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, Building2, Users, Video, FileCheck } from 'lucide-react'

const solutions = [
  { label: 'Virtual Office', href: '/virtual-office', desc: 'Address for GST & company reg', icon: Building2 },
  { label: 'Coworking Spaces', href: '/coworking', desc: 'Desks & private cabins', icon: Users },
  { label: 'Meeting Rooms', href: '/meeting-rooms', desc: 'Book by the hour or day', icon: Video },
  { label: 'CA Services', href: '/ca-services', desc: 'GST, company reg, ITR & more', icon: FileCheck },
]

const navLinks = [
  { label: 'Virtual Office', href: '/virtual-office' },
  { label: 'All Solutions', dropdown: true },
  { label: 'CA Services', href: '/ca-services' },
  { label: 'List Your Space', href: '/list-your-space' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solOpen, setSolOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft' : 'bg-white'
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
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolOpen(true)}
                  onMouseLeave={() => setSolOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-text transition-colors">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${solOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                    <div className="w-72 bg-white rounded-2xl shadow-card border border-surface-100 p-2">
                      {solutions.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                            <s.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#0f1a2e]">{s.label}</div>
                            <div className="text-xs text-text-light">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-text-light hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:8882735038"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#11417c] text-white text-sm font-semibold rounded-lg hover:bg-[#0e3463] transition-colors"
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
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[32rem]' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100">
          <div className="container-custom py-4 space-y-1">
            <Link to="/virtual-office" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all">Virtual Office</Link>
            {/* Solutions group */}
            <div className="px-4 pt-2 pb-1 text-[11px] font-semibold text-text-muted uppercase tracking-wider">All Solutions</div>
            {solutions.map((s) => (
              <Link key={s.label} to={s.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all">
                <s.icon className="w-4 h-4 text-primary" /> {s.label}
              </Link>
            ))}
            <Link to="/ca-services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all">CA Services</Link>
            <Link to="/list-your-space" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all">List Your Space</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-medium text-text-light hover:text-text hover:bg-gray-50 rounded-lg transition-all">Contact Us</Link>
            <div className="pt-3 border-t border-gray-100">
              <a href="tel:8882735038" className="flex items-center justify-center gap-2 px-5 py-3 bg-[#11417c] text-white text-sm font-semibold rounded-lg">
                <Phone className="w-4 h-4" /> 888-273-5038
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
