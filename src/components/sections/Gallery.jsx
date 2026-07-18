import { motion } from 'framer-motion'
import { Building2, MapPin, BadgeCheck } from 'lucide-react'
import { galleryOffices } from '../../data/cities'

const gradients = [
  'from-blue-600 to-indigo-700',
  'from-emerald-600 to-teal-700',
  'from-violet-600 to-purple-700',
  'from-orange-500 to-amber-600',
  'from-cyan-600 to-blue-700',
  'from-rose-600 to-pink-700',
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
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Verified Locations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            Real, Verified Business Addresses
          </h2>
          <p className="text-text-light text-lg">
            A peek inside some of our 200+ premium business addresses across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryOffices.map((office, index) => (
            <motion.div
              key={office.city + office.area}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] hdr-frame hdr-glint"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              {/* Gradient fallback layer (always behind) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} />
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <Building2 className="w-16 h-16 text-white" />
              </div>

              {/* HDR image — hides itself if it fails to load, revealing gradient */}
              <img
                src={office.image}
                alt={`${office.city} — ${office.area}`}
                loading="lazy"
                className="hdr-img absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Cinematic HDR overlay */}
              <div className="hdr-overlay absolute inset-0 z-[1]" />

              {/* Verified badge */}
              <div className="absolute top-3 right-3 z-[3] flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-lg">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold text-[#0f1a2e]">Verified</span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-[3]">
                <div className="flex items-center gap-1.5 text-white">
                  <MapPin className="w-4 h-4 text-blue-200" />
                  <span className="font-bold text-base drop-shadow-sm">{office.city}</span>
                </div>
                <p className="text-white/85 text-xs mt-0.5 drop-shadow-sm">{office.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
