import { motion } from 'framer-motion'
import { useState } from 'react'

// To use official logos: drop files in /public/images/logos/ named exactly as `file` below.
// If a logo image is missing, the brand name text shows automatically (graceful fallback).
const brands = [
  { name: 'Shiprocket', file: '/images/logos/shiprocket.png' },
  { name: 'IndiaMART', file: '/images/logos/indiamart.png' },
  { name: 'Verizon', file: '/images/logos/verizon.png' },
  { name: "Dr. Reddy's", file: '/images/logos/drreddys.png' },
  { name: 'EarthTronEV', file: '/images/logos/earthtronev.png' },
  { name: 'Udaan', file: '/images/logos/udaan.png' },
  { name: 'Omnicuris', file: '/images/logos/omnicuris.png' },
  { name: 'Kalki Fashion', file: '/images/logos/kalki.png' },
  { name: 'Tuckit', file: '/images/logos/tuckit.png' },
  { name: 'Rudra Gas Ltd.', file: '/images/logos/rudragas.png' },
  { name: 'Xpressbees', file: '/images/logos/xpressbees.png' },
  { name: 'Bizzstay', file: '/images/logos/bizzstay.png' },
]

function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="premium-card flex items-center justify-center py-6 px-4 bg-white border border-surface-200 rounded-xl">
      {failed ? (
        <span className="text-base lg:text-lg font-bold text-text-light">{brand.name}</span>
      ) : (
        <img
          src={brand.file}
          alt={brand.name}
          loading="lazy"
          className="max-h-8 lg:max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function TrustLogos() {
  return (
    <section className="py-16 lg:py-20 bg-surface-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
              onMouseMove={(e) => {
                const el = e.currentTarget.querySelector('.premium-card')
                if (!el) return
                const r = el.getBoundingClientRect()
                el.style.setProperty('--mx', `${e.clientX - r.left}px`)
                el.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <BrandLogo brand={brand} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
