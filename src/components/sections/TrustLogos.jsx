import { motion } from 'framer-motion'

const brands = [
  'Shiprocket', 'IndiaMART', 'Verizon', "Dr. Reddy's",
  'EarthTronEV', 'Udaan', 'Omnicuris', 'Kalki Fashion',
  'Tuckit', 'Rudra Gas Ltd.', 'Xpressbees', 'Bizzstay',
]

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
              key={brand}
              className="flex items-center justify-center py-6 px-4 bg-white border border-surface-200 rounded-xl hover:border-primary-200 hover:shadow-soft transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <span className="text-base lg:text-lg font-bold text-text-light">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
