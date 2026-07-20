import { motion } from 'framer-motion'
import { useState } from 'react'

// Big Indian marketplaces. Logos auto-load from /public/images/logos/{slug}.png (or .svg)
// when uploaded; until then a clean brand-coloured wordmark shows.
const marketplaces = [
  { name: 'Amazon', slug: 'amazon', color: '#ff9900' },
  { name: 'Flipkart', slug: 'flipkart', color: '#2874f0' },
  { name: 'Myntra', slug: 'myntra', color: '#ff3f6c' },
  { name: 'Meesho', slug: 'meesho', color: '#9f2089' },
  { name: 'Ajio', slug: 'ajio', color: '#2f4858' },
  { name: 'Nykaa', slug: 'nykaa', color: '#fc2779' },
  { name: 'JioMart', slug: 'jiomart', color: '#0a2885' },
  { name: 'Instamart', slug: 'instamart', color: '#fc8019' },
]

function Brand({ b, index }) {
  const [failed, setFailed] = useState(false)
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      {failed ? (
        <span
          className="text-xl lg:text-2xl font-extrabold tracking-tight transition-transform hover:scale-105"
          style={{ color: b.color }}
        >
          {b.name}
        </span>
      ) : (
        <img
          src={`/images/logos/${b.slug}.png`}
          alt={b.name}
          loading="lazy"
          className="h-8 lg:h-9 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  )
}

export default function MarketplaceLogos() {
  return (
    <section className="py-14 bg-white border-y border-surface-100">
      <div className="container-custom">
        <motion.p
          className="text-center text-sm font-semibold text-text-light uppercase tracking-[0.15em] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get GST registration to sell on all major marketplaces
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {marketplaces.map((b, index) => (
            <Brand key={b.slug} b={b} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
