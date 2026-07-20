import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ShieldCheck, Zap, IndianRupee, ArrowRight, Check } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    word: 'Compliant',
    title: '100% Government-Ready',
    desc: 'Every address comes with fully compliant NOC, rent agreement & utility bills — accepted by GST and MCA officers across India.',
    stat: '97%',
    statLabel: 'First-attempt approval rate',
    points: ['Notarized rent agreement', 'NOC from property owner', 'Utility bill included'],
    color: '#2c679e',
    glow: 'rgba(44,103,158,0.35)',
    num: '01',
  },
  {
    icon: Zap,
    word: 'Fast',
    title: 'Ready in 2–3 Days',
    desc: 'No paperwork hassle, no physical visits. Submit your KYC once and get your complete document set delivered within days — not weeks.',
    stat: '2–3',
    statLabel: 'Working days to handover',
    points: ['100% digital onboarding', 'Dedicated account manager', 'Same-week activation'],
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.35)',
    num: '02',
  },
  {
    icon: IndianRupee,
    word: 'Affordable',
    title: 'From Just ₹699/mo',
    desc: 'A prestigious business address at a fraction of the cost of a physical office. No deposits, no lock-ins, no hidden fees — ever.',
    stat: '₹699',
    statLabel: 'Starting price per month',
    points: ['No security deposit', 'No long-term lock-in', 'Transparent pricing'],
    color: '#059669',
    glow: 'rgba(5,150,105,0.32)',
    num: '03',
  },
]

export default function BrandPillars() {
  const [active, setActive] = useState(0)
  const p = pillars[active]

  // Auto-advance every 5s
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % pillars.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.35]" />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Why EaseMyOffice</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0f1a2e] leading-tight">
            Built on Three Simple Promises
          </h2>
        </motion.div>

        {/* Colorful toggles */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-3 mb-12">
          {pillars.map((pill, i) => {
            const isActive = i === active
            return (
              <button
                key={pill.word}
                onClick={() => setActive(i)}
                className="group relative flex items-center gap-2.5 pl-2.5 pr-5 py-2.5 rounded-full text-base lg:text-lg font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: isActive ? '#fff' : pill.color,
                  background: isActive ? `linear-gradient(135deg, ${pill.color}, ${pill.color}d9)` : '#fff',
                  boxShadow: isActive ? `0 12px 28px -8px ${pill.glow}` : `0 2px 10px -4px ${pill.color}22`,
                  border: isActive ? '1px solid transparent' : `1.5px solid ${pill.color}2e`,
                }}
              >
                {/* icon chip */}
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.22)' : `${pill.color}14`,
                  }}
                >
                  <pill.icon className="w-4 h-4" style={{ color: isActive ? '#fff' : pill.color }} />
                </span>
                {pill.word}
              </button>
            )
          })}
        </div>

        {/* Showcase panel */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden transition-all duration-500"
            style={{
              borderColor: `${p.color}33`,
              boxShadow: `0 30px 70px -25px ${p.glow}`,
              background: 'linear-gradient(160deg, #ffffff 0%, #f8fbff 100%)',
            }}
          >
            {/* Color glow accent */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl transition-colors duration-500" style={{ background: p.glow }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {/* Left content */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
                      <p.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: p.color }}>
                      {p.word}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0f1a2e] mb-3">{p.title}</h3>
                  <p className="text-text-light leading-relaxed mb-6">{p.desc}</p>

                  <div className="space-y-2.5">
                    {p.points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}1a` }}>
                          <Check className="w-3 h-3" style={{ color: p.color }} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-[#0f1a2e]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — big stat display */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="relative w-full max-w-xs aspect-square rounded-3xl flex flex-col items-center justify-center text-center p-8 border"
                    style={{
                      background: `linear-gradient(160deg, ${p.color}0d, ${p.color}03)`,
                      borderColor: `${p.color}22`,
                    }}
                  >
                    {/* faded number bg */}
                    <span className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold select-none opacity-[0.06]" style={{ color: p.color }}>
                      {p.num}
                    </span>
                    <div className="relative">
                      <div className="text-5xl lg:text-6xl font-extrabold mb-2" style={{ color: p.color }}>
                        {p.stat}
                      </div>
                      <div className="text-sm font-medium text-text-light max-w-[180px]">{p.statLabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="relative h-1 bg-surface-100">
              <motion.div
                key={active}
                className="h-full"
                style={{ background: p.color }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
