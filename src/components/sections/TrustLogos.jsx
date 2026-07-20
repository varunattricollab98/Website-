import { motion } from 'framer-motion'
import { useState } from 'react'

// Client brands. Logos auto-load from /public/images/logos/{slug}.png (or .svg) once uploaded;
// until then a clean wordmark shows so nothing ever looks broken.
const brands = [
  { name: 'Shiprocket', slug: 'shiprocket' },
  { name: 'IndiaMART', slug: 'indiamart' },
  { name: 'Verizon', slug: 'verizon' },
  { name: "Dr. Reddy's", slug: 'drreddys' },
  { name: 'Udaan', slug: 'udaan' },
  { name: 'Omnicuris', slug: 'omnicuris' },
  { name: 'Kalki Fashion', slug: 'kalki' },
  { name: 'Xpressbees', slug: 'xpressbees' },
  { name: 'EarthtronEV', slug: 'earthtronev' },
  { name: 'Tuckit', slug: 'tuckit' },
  { name: 'Rudra Gas', slug: 'rudragas' },
  { name: 'Bizzstay', slug: 'bizzstay' },
]

function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      className="premium-card flex items-center justify-center h-24 px-5 bg-white border border-surface-200 rounded-2xl"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      {failed ? (
        <span className="text-base lg:text-lg font-bold text-[#11417c]">{brand.name}</span>
      ) : (
        <img
          src={`/images/logos/${brand.slug}.png`}
          alt={brand.name}
          loading="lazy"
          className="logo-hdr max-h-10 lg:max-h-12 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function TrustLogos() {
  return (
    <section className="py-16 lg:py-20 bg-surface-50 relative">
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
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Social Proof</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0f1a2e] mb-2">
            Trusted by Founders &amp; Finance Teams
          </h2>
          <p className="text-text-light">
            5,000+ brands have set up with EaseMyOffice
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <BrandLogo brand={brand} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
