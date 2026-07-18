import { motion } from 'framer-motion'
import { Check, ChevronDown, ArrowRight, Star, Shield, Zap } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const cityOptions = [
  'Delhi', 'Mumbai', 'Bangalore', 'Gurgaon', 'Noida', 'Pune',
  'Hyderabad', 'Chennai', 'Ahmedabad', 'Kolkata', 'Jaipur',
  'Chandigarh', 'Lucknow', 'Indore', 'Kochi', 'Bhubaneswar',
]

const serviceOptions = [
  'Virtual Office - GST Registration',
  'Virtual Office - Company Registration',
  'Virtual Office - Mailing Address',
  'Coworking Space',
  'Meeting Room',
  'CA Services',
]

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = target / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-hero-mesh" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative z-10 py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content — 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">
                4.9/5 from 5,000+ businesses
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              India's #1 Platform for{' '}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-emerald-200">
                  Virtual Office
                </span>
              </span>{' '}
              & Business Registration
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              Premium business addresses across all 28 states. Get your GST registration, 
              company incorporation, or mailing address — fully compliant, ready in 2-3 days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 shadow-2xl shadow-black/20 transition-all duration-200 text-base"
              >
                View Plans & Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 text-base"
              >
                How It Works
              </a>
            </div>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  <AnimatedCounter target={5000} suffix="+" />
                </div>
                <div className="text-xs lg:text-sm text-blue-200/70 mt-1">Businesses Served</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  <AnimatedCounter target={200} suffix="+" />
                </div>
                <div className="text-xs lg:text-sm text-blue-200/70 mt-1">Addresses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  <AnimatedCounter target={97} suffix="%" />
                </div>
                <div className="text-xs lg:text-sm text-blue-200/70 mt-1">Approval Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form Card — 5 cols */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-7 lg:p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Free Expert Consultation</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-1">Get Your Quote in 10 Minutes</h3>
                <p className="text-sm text-text-light mb-6">No obligation • 100% free</p>

                <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-text-muted"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all placeholder:text-text-muted"
                  />
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all appearance-none text-text-muted"
                      defaultValue=""
                    >
                      <option value="" disabled>Select City</option>
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all appearance-none text-text-muted"
                      defaultValue=""
                    >
                      <option value="" disabled>What do you need?</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-200 text-sm"
                  >
                    Get Free Quote →
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-surface-100">
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Shield className="w-3.5 h-3.5 text-accent-green" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-light">
                    <Zap className="w-3.5 h-3.5 text-accent-green" />
                    <span>10 Min Reply</span>
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
