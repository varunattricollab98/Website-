import { motion } from 'framer-motion'

const marketplaces = ['Flipkart', 'Myntra', 'JioMart', 'Amazon', 'Instamart']

export default function MarketplaceLogos() {
  return (
    <section className="py-14 bg-white border-y border-surface-100">
      <div className="container-custom">
        <motion.p
          className="text-center text-sm font-medium text-text-light uppercase tracking-wider mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get GST registration to sell on all major marketplaces
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {marketplaces.map((name, index) => (
            <motion.span
              key={name}
              className="text-xl lg:text-2xl font-bold text-text-muted hover:text-text-light transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
