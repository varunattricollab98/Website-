import { motion } from 'framer-motion'
import { ChevronRight, MapPin } from 'lucide-react'
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {cities.map((city, index) => (
            <motion.a
              key={city.name}
              href={`/virtual-office/${city.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[5/4] hdr-frame hdr-glint block"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#11417c] to-[#2c679e]" />

              {/* HDR image */}
              <img
                src={city.image}
                alt={`Virtual office in ${city.name}`}
                loading="lazy"
                className="hdr-img absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Overlay */}
              <div className="hdr-overlay absolute inset-0 z-[1]" />

              {/* Content */}
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
