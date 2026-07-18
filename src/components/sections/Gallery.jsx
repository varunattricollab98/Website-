import { motion } from 'framer-motion'
import { Building, MapPin } from 'lucide-react'
import { galleryOffices } from '../../data/cities'

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-violet-600',
  'from-orange-500 to-amber-600',
  'from-cyan-500 to-blue-600',
  'from-rose-500 to-pink-600',
]

export default function Gallery() {
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
            Real, Verified Business Addresses
          </h2>
          <p className="text-text-light text-lg">
            A peek inside some of our 200+ verified business addresses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryOffices.map((office, index) => (
            <motion.div
              key={office.city + office.area}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-soft hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Gradient fallback layer (always behind) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Building className="w-20 h-20 text-white" />
              </div>

              {/* Real image on top — hides itself if it fails to load */}
              <img
                src={office.image}
                alt={`${office.city} — ${office.area}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Overlay + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold text-sm">{office.city}</span>
                </div>
                <p className="text-white/80 text-xs mt-0.5">{office.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
