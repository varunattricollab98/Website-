import { motion } from 'framer-motion'
import { Check, Building2, FileCheck, Mail } from 'lucide-react'

const plans = [
  {
    icon: Building2,
    name: 'Company Registration Plan',
    description: 'Register your company at premium addresses in any city — without taking a physical office.',
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
    description: 'Get a Business compliant virtual office in any state in India to expand sales pan-India.',
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
    description: 'A premium mailing address for your business — no physical office required.',
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
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Plans</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0f1a2e] mb-4 leading-tight">
            Choose the Right Plan<br className="hidden sm:block" /> for Your Business
          </h2>
          <p className="text-text-light text-base lg:text-lg max-w-lg mx-auto">
            Flexible, affordable plans designed to help your business grow — pick what fits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start pt-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`premium-card relative rounded-2xl border p-7 ${
                plan.popular
                  ? 'border-[#f59e0b] shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] ring-1 ring-[#f59e0b]/20'
                  : 'border-surface-200 shadow-soft'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-yellow-400/30 z-10 flex items-center gap-1.5">
                  <span className="text-base">⭐</span> Most Popular
                </div>
              )}

              <div className={`glass-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.popular ? 'bg-gradient-to-br from-[#f59e0b] to-[#d97706]' : 'bg-primary-50'}`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary'}`} />
              </div>

              <h3 className="text-lg font-bold text-[#0f1a2e] mb-2">{plan.name}</h3>
              <p className="text-sm text-text-light mb-6 leading-relaxed">{plan.description}</p>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-amber-50' : 'bg-primary-50'}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-amber-600' : 'text-primary'}`} />
                    </div>
                    <span className="text-sm text-text leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309] shadow-lg shadow-yellow-500/20'
                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}
              >
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
