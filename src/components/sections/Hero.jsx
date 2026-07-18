import { motion } from 'framer-motion'
import { Check, Phone, Lock, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-24 lg:pt-28 pb-16 lg:pb-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <motion.div
            className="pt-4 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50/50 rounded-full px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-primary-800">
                Trusted by 5,000+ businesses across India
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold text-[#0f1a2e] leading-[1.15] mb-6 tracking-tight">
              Get a <span className="text-[#2c679e]">Virtual Office</span> Address in all{' '}
              <span className="text-[#2c679e]">28 States</span> of India
            </h1>

            {/* Subtext */}
            <p className="text-base lg:text-lg text-text-light mb-8 max-w-md leading-relaxed">
              Premium addresses for Business Compliance registration, new company registration and business mailing — fully compliant, ready in 2–3 days.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[15px] text-text">
                  Register a <strong>New Company</strong> with a verified address.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[15px] text-text">
                  Get Virtual Office for <strong>Business Compliance Registration.</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[15px] text-text">
                  A premium <strong>Mailing Address</strong> for your business.
                </span>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-text">4.9/5</span>
                <span className="text-sm text-text-light">Google Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-text-light" />
                <span className="text-sm font-semibold text-text">200+</span>
                <span className="text-sm text-text-light">premium addresses</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-text-light">
                <strong className="text-text">100%</strong> Business Compliance approval support
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 lg:p-8">
              {/* Form Header */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-text-light uppercase tracking-wider mb-1">
                  Fill in your requirements
                </p>
                <h3 className="text-xl font-bold text-text mb-1">
                  Get a free expert consultation
                </h3>
                <p className="text-sm text-text-light">
                  Free quote • No obligation • Reply within 10 mins
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Email + Phone Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="98xxxxxxxx"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1.5">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi, Mumbai, Bangalore"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="I want to apply for Business Compliance Registration, Company Registration, etc."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#11417c] hover:bg-[#0e3463] text-white font-semibold rounded-lg transition-colors text-sm shadow-lg"
                >
                  Submit Details
                </button>
              </form>

              {/* Security note */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Lock className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-400">
                  Your details are safe and only used to contact you.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
