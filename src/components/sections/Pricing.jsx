import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Mailing Address Plan',
    subtitle: 'Just a premium business address',
    price: 699,
    popular: false,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'Business Compliance registration documents', included: false },
      { text: 'Company (MCA) registration', included: false },
      { text: 'Inspection support', included: false },
    ],
  },
  {
    name: 'Business Compliance Registration Plan',
    subtitle: 'Business Compliance-ready address in any state',
    price: 899,
    popular: true,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'Business Compliance registration documents', included: true },
      { text: 'Company (MCA) registration', included: false },
      { text: 'Inspection support', included: true },
    ],
  },
  {
    name: 'Company Registration Plan',
    subtitle: 'Full company + Business Compliance setup',
    price: 1199,
    popular: false,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'Business Compliance registration documents', included: true },
      { text: 'Company (MCA) registration', included: true },
      { text: 'Inspection support', included: true },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-light text-lg">
            No hidden fees, no surprise renewals. Pick the plan that fits your stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`premium-card relative rounded-2xl p-7 border ${
                plan.popular
                  ? 'border-primary shadow-card-hover ring-1 ring-primary/10 lg:-mt-4'
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                  ⭐ Most Popular
                </div>
              )}

              <h3 className="text-base font-bold text-[#0f1a2e] mb-1 min-h-[3rem]">{plan.name}</h3>
              <p className="text-sm text-text-light mb-5">{plan.subtitle}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-[#0f1a2e]">₹{plan.price}</span>
                <span className="text-text-light text-sm"> / month*</span>
              </div>

              <div className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-surface-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-text-muted" />
                      </div>
                    )}
                    <span className={`text-sm leading-snug ${feature.included ? 'text-text' : 'text-text-muted'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-700'
                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-text-light mt-8">
          *Billed annually. Pricing varies by city — contact us for an exact quote.
        </p>
      </div>
    </section>
  )
}
