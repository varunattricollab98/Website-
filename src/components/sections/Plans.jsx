import { motion } from 'framer-motion'
import { Check, Building2, FileCheck, Mail, Phone, ArrowRight } from 'lucide-react'

const plans = [
  {
    icon: Building2,
    name: 'Company Registration Plan',
    description: 'Incorporate your company at a prestigious commercial address in any city — full MCA compliance, zero physical office required.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    accent: 'blue',
    features: [
      'Register a new business entity at this address',
      'Use this address for Business Compliance registration & APOB',
      'NOC, rent agreement & utility bill',
      'MCA registration and compliance support',
      'Use for bank account opening',
      'Mailing & courier handling',
    ],
    popular: false,
  },
  {
    icon: FileCheck,
    name: 'Business Compliance Registration Plan',
    description: 'Establish a GST-ready presence in any state across India and scale your operations nationwide with complete confidence.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    accent: 'blue',
    features: [
      'Use for New Business Compliance registration & APOB',
      'Update your existing Business Compliance address',
      'Business Compliance-ready compliance documents',
      'Business signage at the address',
      'Inspection support',
      'Mailing & courier handling',
    ],
    popular: true,
  },
  {
    icon: Mail,
    name: 'Business Mailing Address',
    description: 'A professional business address for correspondence and brand presence — without the overhead of a physical office.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    accent: 'green',
    features: [
      'Receive business mail & couriers',
      'Mail forwarding (optional)',
      'Use address on website, cards & invoices',
    ],
    popular: false,
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-14 lg:py-16 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Plans &amp; Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0f1a2e] mb-4 leading-tight">
            Solutions Built for Every<br className="hidden sm:block" /> Stage of Your Business
          </h2>
          <p className="text-text-light text-base lg:text-lg max-w-xl mx-auto">
            Transparent, fully-compliant plans for founders, finance teams, and growing enterprises — with dedicated support and no hidden costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start pt-4">
          {plans.map((plan, index) => {
            const isGreen = plan.accent === 'green'
            return (
              <motion.div
                key={plan.name}
                className={`group relative rounded-2xl border bg-white flex flex-col ${
                  plan.popular
                    ? 'border-primary shadow-card-hover ring-1 ring-primary/10'
                    : isGreen
                      ? 'border-emerald-200 shadow-soft'
                      : 'border-surface-200 shadow-soft'
                } hover:shadow-card-hover transition-all duration-300`}
                style={{ overflow: 'visible' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="flex items-center gap-2 bg-[#0f1a2e] text-white text-xs font-bold px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(15,26,46,0.4)] border border-white/10">
                      <svg className="w-3.5 h-3.5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z"/></svg>
                      <span className="tracking-wide uppercase">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Image reveal header */}
                <div className="relative h-40 rounded-t-2xl overflow-hidden">
                  <div className={`absolute inset-0 ${isGreen ? 'bg-gradient-to-br from-emerald-600 to-teal-700' : 'bg-gradient-to-br from-[#11417c] to-[#2c679e]'}`} />
                  <img
                    src={plan.image}
                    alt={plan.name}
                    loading="lazy"
                    className="hdr-img absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,26,46,0.15) 0%, transparent 40%, rgba(15,26,46,0.55) 100%)' }} />
                  {/* Floating icon */}
                  <div className={`absolute -bottom-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border-2 border-white ${isGreen ? 'bg-emerald-600' : plan.popular ? 'bg-primary' : 'bg-[#11417c]'}`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-7 pt-9 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0f1a2e] mb-2">{plan.name}</h3>
                  <p className="text-sm text-text-light mb-6 leading-relaxed">{plan.description}</p>

                  <div className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isGreen ? 'bg-emerald-50' : 'bg-primary-50'}`}>
                          <Check className={`w-3 h-3 ${isGreen ? 'text-emerald-600' : 'text-primary'}`} />
                        </div>
                        <span className="text-sm text-text leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dual CTAs */}
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 group/btn ${
                        plan.popular
                          ? 'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/20'
                          : isGreen
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20'
                            : 'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/20'
                      }`}
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href="tel:8882735038"
                      className={`w-11 h-11 rounded-lg flex items-center justify-center border transition-all ${isGreen ? 'border-emerald-300 text-emerald-600 hover:bg-emerald-50' : 'border-primary/30 text-primary hover:bg-primary-50'}`}
                      aria-label="Call now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
