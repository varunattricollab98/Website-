import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { cities } from '../../data/cities'

export default function CityGrid() {
  return (
    <section className="section-padding bg-surface-50 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Locations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            200+ Addresses Across <span className="gradient-text">All 28 States</span>
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            Click a city to explore available addresses and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {cities.map((city, index) => (
            <motion.a
              key={city.name}
              href={`/virtual-office/${city.slug || city.name.toLowerCase()}`}
              className="group relative bg-white rounded-xl p-5 border border-surface-200 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-text group-hover:text-primary transition-colors">
                    {city.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-light">Starting ₹{city.price}/mo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-text-light mt-8 bg-white border border-surface-200 rounded-xl p-4 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don't see your city? We may still have addresses available — our network covers <strong className="text-text">200+ locations across all 28 states</strong>.
        </motion.p>
      </div>
    </section>
  )
}
