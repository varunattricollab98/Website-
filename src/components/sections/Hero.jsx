import { motion } from 'framer-motion'
import { Check, Phone, Lock, MapPin, Star, User, Mail, ChevronDown, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import { cities } from '../../data/cities'

const requirements = [
  'Business Compliance (GST) Registration',
  'New Company Registration',
  'Business Mailing Address',
  'APOB Registration',
  'Coworking / Meeting Room',
  'Other — not sure yet',
]

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
            <div className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50/50 rounded-full px-4 py-2 mb-8">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-800">
                Trusted by 5,000+ businesses across India
              </span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold text-[#0f1a2e] leading-[1.15] mb-6 tracking-tight">
              Get a <span className="text-[#2c679e]">Virtual Office</span> Address in all{' '}
              <span className="text-[#2c679e]">28 States</span> of India
            </h1>

            <p className="text-base lg:text-lg text-text-light mb-8 max-w-md leading-relaxed">
              Premium addresses for Business Compliance registration, new company registration and business mailing — fully compliant, ready in 2–3 days.
            </p>

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
              <ShieldCheck className="w-4 h-4 text-text-light" />
              <span className="text-sm text-text-light">
                <strong className="text-text">100%</strong> Business Compliance approval support
              </span>
            </div>
          </motion.div>

          {/* Right — Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl border border-gray-200/80 shadow-[0_20px_60px_-15px_rgba(17,65,124,0.25)] overflow-hidden">
              {/* Gradient accent bar */}
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #11417c, #2c679e, #11417c)' }} />

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xl font-bold text-[#0f1a2e]">Get a Free Consultation</h3>
                    </div>
                    <p className="text-sm text-text-light">
                      Our experts reply within <span className="font-semibold text-primary">10 minutes</span>
                    </p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 peer-focus:text-primary" />
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="peer w-full pl-10 pr-4 py-3.5 bg-surface-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full pl-10 pr-4 py-3.5 bg-surface-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full pl-10 pr-4 py-3.5 bg-surface-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Location dropdown */}
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <select
                      defaultValue=""
                      className="w-full pl-10 pr-10 py-3.5 bg-surface-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all appearance-none text-gray-500 valid:text-text"
                    >
                      <option value="" disabled>Preferred city / location</option>
                      {cities.map((c) => (
                        <option key={c.slug} value={c.slug}>{c.name}</option>
                      ))}
                      <option value="other">Other city</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Requirement dropdown */}
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full px-4 pr-10 py-3.5 bg-surface-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all appearance-none text-gray-500"
                    >
                      <option value="" disabled>What do you need help with?</option>
                      {requirements.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full py-4 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #11417c, #2c679e)' }}
                  >
                    Get My Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Lock className="w-3.5 h-3.5 text-accent-green" />
                    <span>100% Secure</span>
                  </div>
                  <div className="w-px h-3 bg-gray-200" />
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Clock className="w-3.5 h-3.5 text-accent-green" />
                    <span>10-min Reply</span>
                  </div>
                  <div className="w-px h-3 bg-gray-200" />
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                    <span>No Spam</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
