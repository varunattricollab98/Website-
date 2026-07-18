import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ target, suffix = '', decimal = false }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const duration = 2000
          const steps = duration / 16
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, started])

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { target: 5000, suffix: '+', label: 'Businesses Served' },
  { target: 200, suffix: '+', label: 'Premium Addresses' },
  { target: 28, suffix: '', label: 'States Covered' },
  { target: 4.9, suffix: '/5', label: 'Google Rating', decimal: true },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-[#11417c] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Our Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="text-sm lg:text-base text-blue-200/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
