import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, FileCheck, Building2, Mail, ArrowRight, ArrowLeft, Check, Sparkles, RotateCcw } from 'lucide-react'
import { cities } from '../../data/cities'

const goals = [
  { id: 'gst', icon: FileCheck, title: 'GST Registration', desc: 'Register GST in any state', plan: 'Business Compliance Plan', color: 'blue' },
  { id: 'company', icon: Building2, title: 'Company Registration', desc: 'Incorporate your company', plan: 'Company Registration Plan', color: 'blue' },
  { id: 'mailing', icon: Mail, title: 'Mailing Address', desc: 'Professional business address', plan: 'Mailing Address Plan', color: 'green' },
]

export default function AddressFinder() {
  const [step, setStep] = useState(1)
  const [city, setCity] = useState(null)
  const [goal, setGoal] = useState(null)

  const reset = () => { setStep(1); setCity(null); setGoal(null) }

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f1a2e 0%, #11417c 60%, #1a5490 100%)' }}>
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2c679e]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Find Your Match in Seconds</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-white mb-4 leading-tight">
            Let's Find Your Perfect Address
          </h2>
          <p className="text-blue-100/80 text-base lg:text-lg">
            Answer 2 quick questions and we'll match you with the right plan.
          </p>
        </motion.div>

        {/* Finder card */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 lg:p-10 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s ? 'bg-primary text-white' : 'bg-surface-100 text-text-muted'
                }`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-10 lg:w-16 h-0.5 mx-1 transition-all ${step > s ? 'bg-primary' : 'bg-surface-200'}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1 — City */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-[#0f1a2e]">Which city do you want your address in?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {cities.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => { setCity(c); setStep(2) }}
                      className="group px-4 py-3 rounded-xl border border-surface-200 text-sm font-medium text-text hover:border-primary hover:bg-primary-50 hover:text-primary transition-all text-left"
                    >
                      {c.name}
                      <span className="block text-xs text-text-muted group-hover:text-primary/70">₹{c.price}/mo</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 — Goal */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-[#0f1a2e]">What do you need it for?</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => { setGoal(g); setStep(3) }}
                      className={`group p-5 rounded-2xl border-2 text-center transition-all hover:-translate-y-1 ${
                        g.color === 'green' ? 'border-surface-200 hover:border-emerald-400 hover:bg-emerald-50' : 'border-surface-200 hover:border-primary hover:bg-primary-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${g.color === 'green' ? 'bg-emerald-100 text-emerald-600' : 'bg-primary-50 text-primary'}`}>
                        <g.icon className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-sm text-[#0f1a2e] mb-1">{g.title}</div>
                      <div className="text-xs text-text-light">{g.desc}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-light hover:text-primary transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </motion.div>
            )}

            {/* Step 3 — Result */}
            {step === 3 && city && goal && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                >
                  <Check className="w-8 h-8 text-emerald-600" strokeWidth={3} />
                </motion.div>
                <p className="text-sm text-text-light mb-2">We found your perfect match!</p>
                <h3 className="text-2xl font-bold text-[#0f1a2e] mb-1">
                  {goal.title} in {city.name}
                </h3>
                <p className="text-text-light mb-6">
                  Recommended: <span className="font-semibold text-primary">{goal.plan}</span>
                </p>

                <div className="inline-flex items-baseline gap-1 bg-surface-50 rounded-2xl px-8 py-5 mb-6 border border-surface-200">
                  <span className="text-sm text-text-light">Starting at</span>
                  <span className="text-4xl font-extrabold text-[#0f1a2e] ml-2">₹{city.price}</span>
                  <span className="text-text-light">/mo</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="#hero" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 transition-all">
                    Get This Address
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button onClick={reset} className="inline-flex items-center gap-1.5 px-6 py-3.5 text-sm font-medium text-text-light hover:text-primary transition-colors">
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
