import { motion } from 'framer-motion'
import { ShieldCheck, Zap, IndianRupee } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    word: 'Compliant',
    title: '100% Government-Ready',
    desc: 'Every address comes with fully compliant NOC, rent agreement & utility bills — accepted by GST and MCA officers, backed by our 97% approval rate.',
    color: '#2c679e',
    bg: 'bg-primary-50',
    num: '01',
  },
  {
    icon: Zap,
    word: 'Fast',
    title: 'Ready in 2–3 Days',
    desc: 'No paperwork hassle, no physical visits. Submit your KYC and get your complete document set delivered within days — not weeks.',
    color: '#f59e0b',
    bg: 'bg-amber-50',
    num: '02',
  },
  {
    icon: IndianRupee,
    word: 'Affordable',
    title: 'From Just ₹699/mo',
    desc: 'A prestigious business address at a fraction of the cost of a physical office. No deposits, no lock-ins, no hidden fees — ever.',
    color: '#059669',
    bg: 'bg-emerald-50',
    num: '03',
  },
]

export default function BrandPillars() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
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

        {/* Big word band */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {pillars.map((p, i) => (
            <div key={p.word} className="flex items-center gap-3 lg:gap-5">
              <span className="text-2xl lg:text-4xl font-extrabold tracking-tight" style={{ color: p.color }}>
                {p.word}
              </span>
              {i < pillars.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-surface-200" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.word}
              className="group relative bg-white rounded-2xl border border-surface-200 p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              {/* Big faded number */}
              <span className="absolute -top-4 -right-2 text-8xl font-extrabold text-surface-100 select-none group-hover:text-surface-200 transition-colors">
                {pillar.num}
              </span>

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-5`}>
                  <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: pillar.color }}>
                  {pillar.word}
                </div>
                <h3 className="text-xl font-bold text-[#0f1a2e] mb-3">{pillar.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{pillar.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: pillar.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
