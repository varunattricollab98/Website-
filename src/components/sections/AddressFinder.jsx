import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, FileCheck, Building2, Mail, ArrowRight, ArrowLeft, Check, RotateCcw, Zap, Sparkles } from 'lucide-react'
import { cities } from '../../data/cities'

const goals = [
  { id: 'gst', icon: FileCheck, title: 'GST Registration', desc: 'Register GST in any state', plan: 'Business Compliance Plan', color: 'blue' },
  { id: 'company', icon: Building2, title: 'Company Registration', desc: 'Incorporate your company', plan: 'Company Registration Plan', color: 'blue' },
  { id: 'mailing', icon: Mail, title: 'Mailing Address', desc: 'Professional business address', plan: 'Mailing Address Plan', color: 'green' },
]

const stepMeta = [
  { n: 1, label: 'City' },
  { n: 2, label: 'Purpose' },
  { n: 3, label: 'Match' },
]

// Pre-computed bubble configs (size, left%, duration, delay)
const bubbleConfigs = [
  { s: 60, l: 6, d: 14, delay: 0 },
  { s: 28, l: 18, d: 11, delay: 2 },
  { s: 90, l: 30, d: 18, delay: 1 },
  { s: 40, l: 44, d: 13, delay: 4 },
  { s: 22, l: 58, d: 10, delay: 0.5 },
  { s: 70, l: 70, d: 16, delay: 3 },
  { s: 34, l: 82, d: 12, delay: 2.5 },
  { s: 50, l: 92, d: 15, delay: 1.5 },
  { s: 18, l: 12, d: 9, delay: 5 },
  { s: 46, l: 64, d: 17, delay: 6 },
]

const sparkleConfigs = [
  { l: 15, t: 25, d: 3, delay: 0 },
  { l: 80, t: 20, d: 2.5, delay: 1 },
  { l: 50, t: 15, d: 3.5, delay: 2 },
  { l: 88, t: 60, d: 2.8, delay: 0.5 },
  { l: 8, t: 65, d: 3.2, delay: 1.8 },
  { l: 35, t: 78, d: 2.6, delay: 2.4 },
]

export default function AddressFinder() {
  const [step, setStep] = useState(1)
  const [city, setCity] = useState(null)
  const [goal, setGoal] = useState(null)

  const reset = () => { setStep(1); setCity(null); setGoal(null) }

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Soft highlighted tint (no heavy blue) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #f4f9ff 0%, #eaf3fc 45%, #f4f9ff 100%)' }} />
      {/* Subtle glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-[#93bce0]/20 rounded-full blur-3xl" />

      {/* Rising bubbles */}
      <div className="bubbles">
        {bubbleConfigs.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              width: `${b.s}px`,
              height: `${b.s}px`,
              left: `${b.l}%`,
              animationDuration: `${b.d}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
        {sparkleConfigs.map((s, i) => (
          <span
            key={`sp-${i}`}
            className="sparkle"
            style={{
              left: `${s.l}%`,
              top: `${s.t}%`,
              animationDuration: `${s.d}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-primary-100 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">Smart Address Matching</span>
          </div>
          <h2 className="text-3xl lg:text-[2.75rem] font-bold text-[#0f1a2e] mb-4 leading-[1.1] tracking-tight">
            Find Your Perfect Address<br className="hidden sm:block" /> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c679e] to-[#5b96cc]">30 Seconds</span>
          </h2>
          <p className="text-text-light text-base lg:text-lg">
            Two quick questions. Instant, tailored recommendation.
          </p>
        </motion.div>

        {/* Console card — light crystal glass */}
        <motion.div
          className="crystal-glass max-w-3xl mx-auto p-6 lg:p-10 relative rounded-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-[2]">
            {/* Progress rail */}
            <div className="flex items-center justify-center gap-1 mb-10">
              {stepMeta.map((s, i) => (
                <div key={s.n} className="flex items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step >= s.n
                        ? 'bg-gradient-to-br from-[#2c679e] to-[#5b96cc] text-white shadow-[0_0_18px_rgba(91,150,204,0.5)]'
                        : 'bg-surface-100 text-text-muted'
                    }`}>
                      {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${step >= s.n ? 'text-primary' : 'text-text-muted'}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < stepMeta.length - 1 && (
                    <div className="w-12 lg:w-20 h-[2px] mx-1 mb-5 rounded-full overflow-hidden bg-surface-200">
                      <div className={`h-full bg-gradient-to-r from-[#2c679e] to-[#5b96cc] transition-all duration-500 ${step > s.n ? 'w-full' : 'w-0'}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1 — City */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold text-[#0f1a2e]">Which city do you want your address in?</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {cities.map((c) => (
                      <button
                        key={c.slug}
                        onClick={() => { setCity(c); setStep(2) }}
                        className="group rounded-xl px-4 py-3.5 text-left bg-white border border-surface-200 hover:border-primary hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span className="block text-sm font-semibold text-[#0f1a2e] group-hover:text-primary">{c.name}</span>
                        <span className="block text-[11px] font-mono text-text-muted mt-0.5">₹{c.price}/mo</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2 — Goal */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold text-[#0f1a2e]">What do you need it for?</h3>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {goals.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => { setGoal(g); setStep(3) }}
                        className={`group p-5 rounded-2xl border-2 text-center bg-white transition-all hover:-translate-y-1 ${g.color === 'green' ? 'border-surface-200 hover:border-emerald-400 hover:bg-emerald-50' : 'border-surface-200 hover:border-primary hover:bg-primary-50'}`}
                      >
                        <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${g.color === 'green' ? 'bg-emerald-100 text-emerald-600' : 'bg-primary-50 text-primary'}`}>
                          <g.icon className="w-6 h-6" />
                        </div>
                        <div className="font-semibold text-sm text-[#0f1a2e] mb-1">{g.title}</div>
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
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }} className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-emerald-100 border border-emerald-200"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <Check className="w-8 h-8 text-emerald-600" strokeWidth={3} />
                  </motion.div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 uppercase tracking-wider mb-3">
                    <Zap className="w-3 h-3" /> Match Found
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0f1a2e] mb-1">
                    {goal.title} in {city.name}
                  </h3>
                  <p className="text-text-light mb-6">
                    Recommended plan: <span className="font-semibold text-primary">{goal.plan}</span>
                  </p>

                  <div className="inline-flex items-baseline gap-1 rounded-2xl px-8 py-5 mb-7 bg-surface-50 border border-surface-200">
                    <span className="text-sm text-text-light">Starting at</span>
                    <span className="text-4xl font-extrabold text-[#0f1a2e] ml-2">₹{city.price}</span>
                    <span className="text-text-light">/mo</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="#hero" className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl transition-all text-white shadow-lg shadow-primary/25" style={{ background: 'linear-gradient(135deg, #2c679e, #5b96cc)' }}>
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
