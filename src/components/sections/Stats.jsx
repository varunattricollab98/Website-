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

const bubbleConfigs = [
  { s: 54, l: 8, d: 15, delay: 0 },
  { s: 26, l: 22, d: 11, delay: 2 },
  { s: 80, l: 38, d: 18, delay: 1 },
  { s: 34, l: 55, d: 13, delay: 3.5 },
  { s: 20, l: 68, d: 10, delay: 0.5 },
  { s: 64, l: 80, d: 16, delay: 2.5 },
  { s: 30, l: 92, d: 12, delay: 4 },
]

const sparkleConfigs = [
  { l: 18, t: 30, d: 3, delay: 0 },
  { l: 78, t: 25, d: 2.5, delay: 1 },
  { l: 48, t: 20, d: 3.5, delay: 2 },
  { l: 88, t: 65, d: 2.8, delay: 0.5 },
  { l: 10, t: 68, d: 3.2, delay: 1.8 },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Soft highlighted tint (no heavy blue) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #f4f9ff 0%, #eaf3fc 45%, #f4f9ff 100%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#93bce0]/20 rounded-full blur-3xl" />

      {/* Rising bubbles + sparkles */}
      <div className="bubbles">
        {bubbleConfigs.map((b, i) => (
          <span key={i} className="bubble" style={{ width: `${b.s}px`, height: `${b.s}px`, left: `${b.l}%`, animationDuration: `${b.d}s`, animationDelay: `${b.delay}s` }} />
        ))}
        {sparkleConfigs.map((s, i) => (
          <span key={`sp-${i}`} className="sparkle" style={{ left: `${s.l}%`, top: `${s.t}%`, animationDuration: `${s.d}s`, animationDelay: `${s.delay}s` }} />
        ))}
      </div>

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-primary-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Numbers</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0f1a2e]">Trusted by Businesses Across India</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl py-8 border border-white shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#11417c] to-[#2c679e]">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} decimal={stat.decimal} />
              </div>
              <div className="text-sm lg:text-base text-text-light font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
