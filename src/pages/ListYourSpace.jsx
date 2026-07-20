import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, ShieldCheck, IndianRupee, Headphones, ArrowRight, Check } from 'lucide-react'

const benefits = [
  { icon: TrendingUp, title: 'Maximize Occupancy', desc: 'Fill your empty desks and cabins with a steady stream of verified, ready-to-book clients.' },
  { icon: IndianRupee, title: 'Extra Revenue Stream', desc: 'Earn from virtual office registrations, meeting room bookings, and day passes — with zero marketing cost.' },
  { icon: Users, title: '5,000+ Businesses', desc: 'Tap into our growing network of founders, startups, and enterprises actively looking for space.' },
  { icon: ShieldCheck, title: 'Verified Leads Only', desc: 'We pre-qualify every enquiry so you only deal with genuine, serious clients.' },
  { icon: Headphones, title: 'Dedicated Partner Support', desc: 'A relationship manager handles onboarding, documentation, and payments end-to-end.' },
  { icon: Building2, title: 'You Stay in Control', desc: 'Set your own pricing and availability. Accept only the bookings that work for you.' },
]

const steps = [
  { n: '1', title: 'Share your space details', desc: 'Tell us about your location, amenities, and available capacity.' },
  { n: '2', title: 'Get verified & listed', desc: 'Our team verifies your space and creates a premium listing.' },
  { n: '3', title: 'Start earning', desc: 'Receive verified bookings and grow your revenue every month.' },
]

export default function ListYourSpace() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f1a2e 0%, #11417c 60%, #1a5490 100%)' }}>
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#2c679e]/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">For Space Owners</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5">
                List Your Space.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">Earn More Every Month.</span>
              </h1>
              <p className="text-blue-100/80 text-lg mb-8 max-w-md">
                Partner with EaseMyOffice and turn your unused desks, cabins, and address capacity into a reliable revenue stream — with verified clients and zero marketing effort.
              </p>
              <div className="flex flex-wrap gap-6">
                <div><div className="text-2xl font-bold text-white">200+</div><div className="text-sm text-blue-200/70">Partner spaces</div></div>
                <div className="border-l border-white/10 pl-6"><div className="text-2xl font-bold text-white">28</div><div className="text-sm text-blue-200/70">States</div></div>
                <div className="border-l border-white/10 pl-6"><div className="text-2xl font-bold text-white">5,000+</div><div className="text-sm text-blue-200/70">Clients</div></div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-[#0f1a2e] mb-1">Become a Partner</h3>
                <p className="text-sm text-text-light mb-6">Fill in your details — our partnerships team will reach out within 24 hours.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" />
                    <input type="text" placeholder="City" className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" />
                  </div>
                  <input type="text" placeholder="Space name / location" className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" />
                  <textarea rows={3} placeholder="Tell us about your space — type, capacity, amenities" className="w-full px-4 py-3.5 bg-surface-50 border border-surface-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all resize-none" />
                  <button type="submit" className="w-full py-4 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg, #11417c, #2c679e)' }}>
                    List My Space <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Why Partner With Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e]">Everything You Need to Grow Occupancy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} className="bg-white rounded-2xl border border-surface-200 p-6 lg:p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-[#0f1a2e] mb-2">{b.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">List in 3 Simple Steps</h2>
            <p className="text-text-light text-lg">From sign-up to your first booking — we handle the heavy lifting.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={s.n} className="text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-primary/25">{s.n}</div>
                <h3 className="text-lg font-bold text-[#0f1a2e] mb-2">{s.title}</h3>
                <p className="text-sm text-text-light leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 transition-all">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
