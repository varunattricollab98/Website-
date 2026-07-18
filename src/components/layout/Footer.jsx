import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'List Your Space', href: '#' },
  ],
  services: [
    { label: 'Virtual Office', href: '/virtual-office' },
    { label: 'Coworking Spaces', href: '/coworking' },
    { label: 'Meeting Rooms', href: '/meeting-rooms' },
    { label: 'GST Registration', href: '/ca-services' },
    { label: 'Company Registration', href: '/ca-services' },
    { label: 'Trademark Registration', href: '/ca-services' },
  ],
  cities: [
    { label: 'Delhi', href: '/virtual-office/delhi' },
    { label: 'Mumbai', href: '/virtual-office/mumbai' },
    { label: 'Bangalore', href: '/virtual-office/bangalore' },
    { label: 'Gurgaon', href: '/virtual-office/gurgaon' },
    { label: 'Noida', href: '/virtual-office/noida' },
    { label: 'Hyderabad', href: '/virtual-office/hyderabad' },
    { label: 'Chennai', href: '/virtual-office/chennai' },
    { label: 'Pune', href: '/virtual-office/pune' },
    { label: 'Kolkata', href: '/virtual-office/kolkata' },
    { label: 'Ahmedabad', href: '/virtual-office/ahmedabad' },
  ],
}

export default function Footer() {
  return (
    <>
      <footer className="bg-text pt-16 pb-8 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-3">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Ease<span className="text-primary-400">My</span>Office
                </span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                India's leading platform for virtual office, coworking, and business compliance solutions.
              </p>
              <div className="space-y-3">
                <a href="tel:8882735038" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> 888-273-5038
                </a>
                <a href="mailto:connect@easemyoffice.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> connect@easemyoffice.in
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>336, Udyog Vihar Phase 4, Sector 19, Gurugram, Haryana 122016</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Virtual Office In</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {footerLinks.cities.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 EaseMyOffice. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918882735038"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </>
  )
}
