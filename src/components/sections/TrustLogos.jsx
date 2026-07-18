import { motion } from 'framer-motion'

const brands = [
  { name: 'Verizon', category: 'Telecom' },
  { name: 'Kinetic Green', category: 'EV' },
  { name: 'HomeLane', category: 'Interiors' },
  { name: 'Omnicuris', category: 'Healthcare' },
  { name: 'BatterySmart', category: 'Energy' },
  { name: 'Uptodd', category: 'EdTech' },
  { name: 'Simpl', category: 'Fintech' },
  { name: 'Fitelo', category: 'Health' },
  { name: 'Kalki Fashion', category: 'Fashion' },
  { name: 'EarthtronEV', category: 'EV' },
  { name: 'Roarx', category: 'Tech' },
  { name: 'Tummy Friendly', category: 'D2C' },
  { name: 'Tuckit', category: 'Lifestyle' },
  { name: 'Rudra Gas', category: 'Energy' },
  { name: 'DS Pipeline', category: 'Industrial' },
  { name: 'Bizzstay', category: 'Hospitality' },
]

export default function TrustLogos() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      
      <div className="container-custom mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Social Proof</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-text mb-3">
            Trusted by India's Fastest Growing Brands
          </h2>
          <p className="text-text-light text-sm lg:text-base max-w-xl mx-auto">
            Powering startups, enterprises, healthcare, logistics, fintech & mobility brands across India.
          </p>
        </motion.div>
      </div>

      {/* Logo Grid */}
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {brands.slice(0, 10).map((brand, index) => (
            <motion.div
              key={brand.name}
              className="group flex flex-col items-center justify-center py-5 px-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-soft transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-sm lg:text-base font-bold text-text group-hover:text-primary transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider mt-1">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <div className="container-custom mt-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-light">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-500">★★★★★</span>
            <span className="font-semibold text-text">4.9/5</span>
          </div>
          <span className="hidden sm:inline text-surface-200">|</span>
          <span><strong className="text-text">5,000+</strong> Clients Served</span>
          <span className="hidden sm:inline text-surface-200">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-accent-green rounded-full" />
            <strong className="text-text">97%</strong> Approval Rate
          </span>
        </div>
      </div>
    </section>
  )
}
