import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Monthly cost', emo: 'From ₹699', coworking: '₹8,000 – 15,000', traditional: '₹40,000+' },
  { feature: 'Setup time', emo: '2–3 days', coworking: '1–2 weeks', traditional: '30–60 days' },
  { feature: 'Business Compliance registration documents', emo: true, coworking: 'Sometimes', traditional: true },
  { feature: 'Company (MCA) registration', emo: true, coworking: false, traditional: true },
  { feature: 'Pan-India presence', emo: true, coworking: false, traditional: false },
  { feature: 'Mail & courier handling', emo: true, coworking: true, traditional: true },
  { feature: 'No long lock-in', emo: true, coworking: false, traditional: false },
  { feature: 'Dedicated account manager', emo: true, coworking: false, traditional: false },
]

function CellValue({ value }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" strokeWidth={3} />
  if (value === false) return <X className="w-5 h-5 text-red-300 mx-auto" />
  return <span className="text-sm font-medium text-text">{value}</span>
}

export default function ComparisonTable() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            Why EaseMyOffice Wins
          </h2>
          <p className="text-text-light text-lg">
            Same compliance. Same prestige. A fraction of the cost.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 text-sm font-medium text-text-light w-[34%]"></th>
                <th className="py-4 px-5 w-[22%]">
                  <div className="bg-primary rounded-t-xl py-4 px-3 text-center">
                    <div className="text-white font-bold text-sm">EaseMyOffice</div>
                    <div className="inline-block mt-1 bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      BEST
                    </div>
                  </div>
                </th>
                <th className="py-4 px-5 text-center text-sm font-semibold text-text-light w-[22%]">Coworking</th>
                <th className="py-4 px-5 text-center text-sm font-semibold text-text-light w-[22%]">Traditional Office</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.feature}>
                  <td className={`py-4 px-5 text-sm text-text font-medium ${index !== rows.length - 1 ? 'border-b border-surface-100' : ''}`}>
                    {row.feature}
                  </td>
                  <td className={`py-4 px-5 text-center bg-primary-50/40 ${index === rows.length - 1 ? 'rounded-b-xl' : ''}`}>
                    <CellValue value={row.emo} />
                  </td>
                  <td className={`py-4 px-5 text-center ${index !== rows.length - 1 ? 'border-b border-surface-100' : ''}`}>
                    <CellValue value={row.coworking} />
                  </td>
                  <td className={`py-4 px-5 text-center ${index !== rows.length - 1 ? 'border-b border-surface-100' : ''}`}>
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
