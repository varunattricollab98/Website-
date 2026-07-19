import { motion } from 'framer-motion'
import { Check, X, IndianRupee, Clock, FileCheck, Building2, Globe, Mail, Unlock, UserCheck, Crown } from 'lucide-react'

const rows = [
  { icon: IndianRupee, feature: 'Monthly cost', emo: 'From ₹699', coworking: '₹8,000–15,000', traditional: '₹40,000+' },
  { icon: Clock, feature: 'Setup time', emo: '2–3 days', coworking: '1–2 weeks', traditional: '30–60 days' },
  { icon: FileCheck, feature: 'GST registration documents', emo: true, coworking: 'Sometimes', traditional: true },
  { icon: Building2, feature: 'Company (MCA) registration', emo: true, coworking: false, traditional: true },
  { icon: Globe, feature: 'Pan-India presence', emo: true, coworking: false, traditional: false },
  { icon: Mail, feature: 'Mail & courier handling', emo: true, coworking: true, traditional: true },
  { icon: Unlock, feature: 'No long lock-in', emo: true, coworking: false, traditional: false },
  { icon: UserCheck, feature: 'Dedicated account manager', emo: true, coworking: false, traditional: false },
]

function Cell({ value, highlight }) {
  if (value === true) {
    return (
      <div className={`mx-auto w-7 h-7 rounded-full flex items-center justify-center ${highlight ? 'bg-primary shadow-md shadow-primary/30' : 'bg-emerald-100'}`}>
        <Check className={`w-4 h-4 ${highlight ? 'text-white' : 'text-emerald-600'}`} strokeWidth={3} />
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="mx-auto w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
        <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
      </div>
    )
  }
  return <span className={`text-sm font-bold ${highlight ? 'text-[#11417c]' : 'text-text-light'}`}>{value}</span>
}

export default function ComparisonTable() {
  return (
    <section className="section-padding bg-gradient-to-b from-surface-50 to-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Smart Choice</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0f1a2e] mb-4 leading-tight">
            Why EaseMyOffice <span className="text-primary">Wins</span>
          </h2>
          <p className="text-text-light text-base lg:text-lg">
            Same compliance. Same prestige. A fraction of the cost.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-0 rounded-3xl bg-white shadow-[0_30px_80px_-25px_rgba(17,65,124,0.25)] border border-surface-100 overflow-hidden">

            {/* Highlighted winner column — soft glossy light-blue pillar */}
            <div
              className="absolute top-4 bottom-4 left-[calc(1.4/4.4*100%)] w-[calc(1/4.4*100%)] rounded-3xl z-0 overflow-hidden border border-primary-200/70 shadow-[0_20px_45px_-12px_rgba(44,103,158,0.28)]"
              style={{ background: 'linear-gradient(180deg, #f2f8ff 0%, #dcebfb 55%, #cfe1f6 100%)' }}
            >
              {/* Top glossy shine */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/90 to-transparent" />
              {/* Soft glare sweep */}
              <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
            </div>

            {/* ===== Header row ===== */}
            <div className="relative z-10 p-5 lg:p-6 flex items-end">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Features</span>
            </div>
            {/* EMO winner header */}
            <div className="relative z-10 pt-8 pb-5 px-5 text-center">
              <div className="inline-flex items-center gap-1.5 bg-[#f59e0b] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 shadow-lg">
                <Crown className="w-3 h-3" /> BEST VALUE
              </div>
              <div className="text-[#11417c] font-extrabold text-base lg:text-lg">EaseMyOffice</div>
            </div>
            <div className="relative z-10 p-5 lg:p-6 text-center flex flex-col justify-end">
              <div className="text-text-light font-semibold text-sm lg:text-base">Coworking</div>
            </div>
            <div className="relative z-10 p-5 lg:p-6 text-center flex flex-col justify-end">
              <div className="text-text-light font-semibold text-sm lg:text-base">Traditional Office</div>
            </div>

            {/* ===== Data rows ===== */}
            {rows.map((row, index) => (
              <div key={row.feature} className="contents group">
                {/* Feature label */}
                <div className={`relative z-10 flex items-center gap-3 px-5 lg:px-6 py-4 ${index % 2 === 0 ? 'bg-surface-50/60' : 'bg-white'} group-hover:bg-primary-50/40 transition-colors`}>
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-[#0f1a2e]">{row.feature}</span>
                </div>
                {/* EMO cell (on gradient) */}
                <motion.div
                  className="relative z-10 flex items-center justify-center px-4 py-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Cell value={row.emo} highlight />
                </motion.div>
                {/* Coworking */}
                <div className={`relative z-10 flex items-center justify-center px-4 py-4 ${index % 2 === 0 ? 'bg-surface-50/60' : 'bg-white'} group-hover:bg-primary-50/20 transition-colors`}>
                  <Cell value={row.coworking} />
                </div>
                {/* Traditional */}
                <div className={`relative z-10 flex items-center justify-center px-4 py-4 ${index % 2 === 0 ? 'bg-surface-50/60' : 'bg-white'} group-hover:bg-primary-50/20 transition-colors`}>
                  <Cell value={row.traditional} />
                </div>
              </div>
            ))}

            {/* ===== CTA row inside winner column ===== */}
            <div className="relative z-10" />
            <div className="relative z-10 p-4 pb-6">
              <a
                href="#hero"
                className="block w-full text-center py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 transition-all"
              >
                Get Started
              </a>
            </div>
            <div className="relative z-10" />
            <div className="relative z-10" />
          </div>

          {/* Savings highlight below */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2.5">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-semibold text-emerald-800">
                Save up to <span className="text-emerald-600 font-extrabold">₹39,000/month</span> vs a traditional office
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
