import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cities } from '../../data/cities'

export default function CityGrid() {
  return (
    <section id="cities" className="section-padding bg-surface-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            Virtual Office Locations Across India
          </h2>
          <p className="text-text-light text-lg">
            Premium business addresses in 200+ locations across India. Click a city to enquire.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {cities.map((city, index) => (
            <motion.a
              key={city.name}
              href={`/virtual-office/${city.slug}`}
              className="premium-card group flex items-center justify-between rounded-xl p-4 lg:p-5 border border-surface-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <div>
                <div className="text-sm font-bold text-[#0f1a2e] group-hover:text-primary transition-colors">
                  {city.name}
                </div>
                <div className="text-xs text-text-light mt-0.5">
                  Starting ₹{city.price.toLocaleString()}/mo
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 bg-white border border-surface-200 rounded-xl p-5 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-text-light">
            Don't see your city? We may still have addresses available there — our network covers{' '}
            <strong className="text-text">200+ locations across all 28 states</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
