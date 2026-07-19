import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, MapPin } from 'lucide-react'
import { cities } from '../../data/cities'

const collections = [
  { id: 'popular', label: 'Most Popular', filter: (c) => ['delhi', 'mumbai', 'bangalore', 'gurgaon', 'noida', 'hyderabad', 'pune', 'chennai'].includes(c.slug) },
  { id: 'budget', label: 'Budget-Friendly', filter: (c) => c.price <= 799 },
  { id: 'premium', label: 'Premium Metros', filter: (c) => c.price >= 999 },
  { id: 'all', label: 'All Cities', filter: () => true },
]

export default function CityGrid() {
  const [active, setActive] = useState('popular')
  const activeCollection = collections.find((c) => c.id === active)
  const filtered = cities.filter(activeCollection.filter)

  return (
    <section id="cities" className="section-padding bg-surface-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Locations</span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-[#0f1a2e] mb-4 leading-tight">
            Virtual Office Locations Across India
          </h2>
          <p className="text-text-light text-base lg:text-lg">
            Premium business addresses in 200+ locations. Browse by what fits you best.
          </p>
        </motion.div>

        {/* Curated collection tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {collections.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-text-light border border-surface-200 hover:border-primary hover:text-primary'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* City cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((city, index) => (
              <motion.a
                key={city.name}
                href={`/virtual-office/${city.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[5/4] hdr-frame hdr-glint block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#11417c] to-[#2c679e]" />
                <img
                  src={city.image}
                  alt={`Virtual office in ${city.name}`}
                  loading="lazy"
                  className="hdr-img absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="hdr-overlay absolute inset-0 z-[1]" />
                <div className="absolute inset-0 z-[3] flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <MapPin className="w-4 h-4 text-blue-200" />
                    <span className="text-base font-bold text-white drop-shadow-sm">{city.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/85 drop-shadow-sm">
                      Starting ₹{city.price.toLocaleString()}/mo
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-[#11417c] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

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
