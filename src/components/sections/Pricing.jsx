import { motion } from 'framer-motion'
import { Check, X, Zap, Star } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Mailing Address',
    subtitle: 'Professional business address',
    price: { monthly: 699, annual: 599 },
    popular: false,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'GST registration documents', included: false },
      { text: 'Company (MCA) registration', included: false },
      { text: 'Inspection support', included: false },
    ],
  },
  {
    name: 'GST Registration',
    subtitle: 'GST-ready address in any state',
    price: { monthly: 899, annual: 749 },
    popular: true,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'GST registration documents', included: true },
      { text: 'Company (MCA) registration', included: false },
      { text: 'Inspection support', included: true },
    ],
  },
  {
    name: 'Company Registration',
    subtitle: 'Full company + GST setup',
    price: { monthly: 1199, annual: 999 },
    popular: false,
    features: [
      { text: 'Premium business address', included: true },
      { text: 'Mail & courier handling', included: true },
      { text: 'Use on website / cards / invoices', included: true },
      { text: 'GST registration documents', included: true },
      { text: 'Company (MCA) registration', included: true },
      { text: 'Inspection support', included: true },
    ],
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="section-padding bg-surface-50 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto mb-8">
            No hidden fees. Pick the plan that fits your business stage.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 border border-surface-200 shadow-soft">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${!isAnnual ? 'bg-primary text-white shadow-lg' : 'text-text-light hover:text-text'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-1.5 ${isAnnual ? 'bg-primary text-white shadow-lg' : 'text-text-light hover:text-text'}`}
            >
              Annual
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isAnnual ? 'bg-white/20 text-white' : 'bg-accent-green/10 text-accent-green'}`}>
                Save 15%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-7 lg:p-8 border transition-all duration-300 hover-lift ${
                plan.popular 
                  ? 'border-primary shadow-card-hover ring-1 ring-primary/10 scale-[1.02]' 
                  : 'border-surface-200 shadow-soft hover:border-primary-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/30">
                  <Star className="w-3 h-3 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-text mb-1">{plan.name}</h3>
                <p className="text-sm text-text-light">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-text">
                    ₹{isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-text-light text-sm">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-accent-green font-medium mt-1">
                    Billed annually • Save ₹{(plan.price.monthly - plan.price.annual) * 12}/yr
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-green" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-surface-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-text-muted" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-text' : 'text-text-muted'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/25'
                    : 'bg-surface-50 text-text hover:bg-primary hover:text-white border border-surface-200 hover:border-primary'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-text-light mt-8">
          *Pricing varies by city. Contact us for an exact quote for your location.
        </p>
      </div>
    </section>
  )
}
