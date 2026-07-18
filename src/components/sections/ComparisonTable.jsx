import { motion } from 'framer-motion'
import { Check, X, Crown } from 'lucide-react'

const rows = [
  { feature: 'Monthly cost', emo: 'From ₹699', coworking: '₹8,000 – 15,000', traditional: '₹40,000+' },
  { feature: 'Setup time', emo: '2–3 days', coworking: '1–2 weeks', traditional: '30–60 days' },
  { feature: 'GST registration documents', emo: true, coworking: 'partial', traditional: true },
  { feature: 'Company (MCA) registration', emo: true, coworking: false, traditional: true },
  { feature: 'Pan-India presence (28 states)', emo: true, coworking: false, traditional: false },
  { feature: 'Mail & courier handling', emo: true, coworking: true, traditional: true },
  { feature: 'No long-term lock-in', emo: true, coworking: false, traditional: false },
  { feature: 'Dedicated account manager', emo: true, coworking: false, traditional: false },
]

function CellValue({ value }) {
  if (value === true) return <Check className="w-5 h-5 text-accent-green mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />
  if (value === 'partial') return <span className="text-sm text-text-muted">Sometimes</span>
  return <span className="text-sm font-semibold text-text">{value}</span>
}

export default function ComparisonTable() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Compare</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Same Compliance. <span className="gradient-text">Fraction of the Cost.</span>
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            See how EaseMyOffice compares to other options.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 text-sm font-medium text-text-light w-[35%]">Features</th>
                <th className="py-4 px-5 w-[25%]">
                  <div className="bg-primary rounded-xl p-4 text-center relative">
                    <Crown className="w-4 h-4 text-yellow-300 mx-auto mb-1" />
                    <span className="text-white font-bold text-sm">EaseMyOffice</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </th>
                <th className="py-4 px-5 text-center text-sm font-medium text-text-light w-[20%]">Coworking</th>
                <th className="py-4 px-5 text-center text-sm font-medium text-text-light w-[20%]">Traditional Office</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-t border-surface-100 ${index % 2 === 0 ? 'bg-surface-50/50' : ''}`}
                >
                  <td className="py-4 px-5 text-sm text-text font-medium">{row.feature}</td>
                  <td className="py-4 px-5 text-center bg-primary-50/30">
                    <CellValue value={row.emo} />
                  </td>
                  <td className="py-4 px-5 text-center">
                    <CellValue value={row.coworking} />
                  </td>
                  <td className="py-4 px-5 text-center">
                    <CellValue value={row.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
