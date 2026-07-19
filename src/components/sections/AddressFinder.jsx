import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, FileCheck, Building2, Mail, ArrowRight, ArrowLeft, Check, RotateCcw, Zap, Cpu } from 'lucide-react'
import { cities } from '../../data/cities'

const goals = [
  { id: 'gst', icon: FileCheck, title: 'GST Registration', desc: 'Register GST in any state', plan: 'Business Compliance Plan', accent: '#5b96cc' },
  { id: 'company', icon: Building2, title: 'Company Registration', desc: 'Incorporate your company', plan: 'Company Registration Plan', accent: '#5b96cc' },
  { id: 'mailing', icon: Mail, title: 'Mailing Address', desc: 'Professional business address', plan: 'Mailing Address Plan', accent: '#34d399' },
]

const steps = [
  { n: 1, label: 'City' },
  { n: 2, label: 'Purpose' },
  { n: 3, label: 'Match' },
]

export default function AddressFinder() {
  const [step, setStep] = useState(1)
  const [city, setCity] = useState(null)
  const [goal, setGoal] = useState(null)

  const reset = () => { setStep(1); setCity(null); setGoal(null) }

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#0a1424]">
      {/* Ambient gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(44,103,158,0.35), transparent 60%), linear-gradient(180deg, #0a1424 0%, #0d1b30 100%)' }} />
      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid" />
      {/* Drifting orbs */}
      <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full blur-3xl orb-drift" style={{ background: 'radial-gradient(circle, rgba(44,103,158,0.4), transparent 70%)' }} />
      <div className="absolute bottom-0 left-[5%] w-72 h-72 rounded-full blur-3xl orb-drift" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)', animationDelay: '-8s' }} />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-[#5b96cc]" />
            <span className="text-[11px] font-semibold text-white/90 uppercase tracking-[0.15em]">Smart Address Matching</span>
          </div>
          <h2 className="text-3xl lg:text-[2.75rem] font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Find Your Perfect Address<br className="hidden sm:block" /> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93bce0] to-[#5b96cc]">30 Seconds</span>
          </h2>
          <p className="text-slate-400 text-base lg:text-lg">
            Two quick questions. Instant, tailored recommendation.
          </p>
        </motion.div>

        {/* Console card */}
        <motion.div
          className="glow-border max-w-3xl mx-auto p-6 lg:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress rail */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className={`relative w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step >= s.n
                      ? 'bg-gradient-to-br from-[#5b96cc] to-[#2c679e] text-white shadow-[0_0_20px_rgba(91,150,204,0.6)]'
                      : 'bg-white/[0.05] text-slate-500 border border-white/10'
                  }`}>
                    {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider transition-colors ${step >= s.n ? 'text-[#93bce0]' : 'text-slate-600'}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-12 lg:w-20 h-[2px] mx-1 mb-5 rounded-full overflow-hidden bg-white/10">
                    <div className={`h-full bg-gradient-to-r from-[#5b96cc] to-[#2c679e] transition-all duration-500 ${step > s.n ? 'w-full' : 'w-0'}`} />
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
                  <div className="w-8 h-8 rounded-lg bg-[#5b96cc]/15 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#5b96cc]" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-white">Which city do you want your address in?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {cities.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => { setCity(c); setStep(2) }}
                      className="tech-tile group rounded-xl px-4 py-3.5 text-left"
                    >
                      <span className="block text-sm font-semibold text-white group-hover:text-white">{c.name}</span>
                      <span className="block text-[11px] font-mono text-[#93bce0]/70 mt-0.5">₹{c.price}/mo</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 — Goal */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#5b96cc]/15 flex items-center justify-center">
                    <FileCheck className="w-4 h-4 text-[#5b96cc]" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-white">What do you need it for?</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => { setGoal(g); setStep(3) }}
                      className="tech-tile group rounded-2xl p-5 text-center"
                    >
                      <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${g.accent}22` }}>
                        <g.icon className="w-6 h-6" style={{ color: g.accent }} />
                      </div>
                      <div className="font-semibold text-sm text-white mb-1">{g.title}</div>
                      <div className="text-xs text-slate-400">{g.desc}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#93bce0] transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </motion.div>
            )}

            {/* Step 3 — Result */}
            {step === 3 && city && goal && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }} className="text-center relative">
                {/* scanning line flourish */}
                <div className="relative scanline rounded-2xl">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.25), rgba(52,211,153,0.05))', border: '1px solid rgba(52,211,153,0.4)' }}
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <Check className="w-8 h-8 text-emerald-400" strokeWidth={3} />
                  </motion.div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/80 uppercase tracking-wider mb-3">
                    <Zap className="w-3 h-3" /> Match Found
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {goal.title} in {city.name}
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Recommended plan: <span className="font-semibold text-[#93bce0]">{goal.plan}</span>
                  </p>

                  <div className="inline-flex items-baseline gap-1 rounded-2xl px-8 py-5 mb-7 bg-white/[0.04] border border-white/10">
                    <span className="text-sm text-slate-400">Starting at</span>
                    <span className="text-4xl font-extrabold text-white ml-2">₹{city.price}</span>
                    <span className="text-slate-400">/mo</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="#hero" className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl transition-all text-white shadow-[0_8px_30px_rgba(44,103,158,0.5)]" style={{ background: 'linear-gradient(135deg, #2c679e, #5b96cc)' }}>
                      Get This Address
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button onClick={reset} className="inline-flex items-center gap-1.5 px-6 py-3.5 text-sm font-medium text-slate-400 hover:text-[#93bce0] transition-colors">
                      <RotateCcw className="w-4 h-4" /> Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
