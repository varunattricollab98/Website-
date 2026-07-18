import { motion } from 'framer-motion'
import { Check, Phone, Lock, MapPin, Star, User, Mail, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-24 lg:pt-28 pb-16 lg:pb-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
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

          {/* Right — Crystal Glass Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="crystal-glass relative rounded-[24px]">
              <div className="p-6 lg:p-8 relative z-[2]">
                {/* Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f1a2e]">Get a Free Consultation</h3>
                    <p className="text-sm text-text-light">
                      Our experts reply within <span className="font-semibold text-primary">10 minutes</span>
                    </p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="crystal-field w-full pl-10 pr-4 py-3.5 rounded-2xl text-sm text-text"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email address"
                        className="crystal-field w-full pl-10 pr-4 py-3.5 rounded-2xl text-sm text-text"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="crystal-field w-full pl-10 pr-4 py-3.5 rounded-2xl text-sm text-text"
                      />
                    </div>
                  </div>

                  {/* Preferred Location — free type */}
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Preferred location (e.g. Delhi, Mumbai)"
                      className="crystal-field w-full pl-10 pr-4 py-3.5 rounded-2xl text-sm text-text"
                    />
                  </div>

                  {/* Additional Details — free type */}
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="Tell us what you need — GST registration, company registration, mailing address, etc."
                      className="crystal-field w-full px-4 py-3.5 rounded-2xl text-sm text-text resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="liquid-btn group w-full py-4 text-white font-bold rounded-2xl transition-all text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #11417c, #2c679e)' }}
                  >
                    Get My Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-white/40">
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Lock className="w-3.5 h-3.5 text-accent-green" />
                    <span>100% Secure</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300/50" />
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Clock className="w-3.5 h-3.5 text-accent-green" />
                    <span>10-min Reply</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300/50" />
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
