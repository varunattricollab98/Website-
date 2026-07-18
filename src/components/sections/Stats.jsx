import { motion } from 'framer-motion'
import { Users, MapPin, Map, TrendingUp, Star } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, started])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { icon: Users, number: 5000, suffix: '+', label: 'Businesses Served', color: 'from-blue-500 to-blue-600' },
  { icon: MapPin, number: 200, suffix: '+', label: 'Premium Addresses', color: 'from-emerald-500 to-emerald-600' },
  { icon: Map, number: 28, suffix: '', label: 'States Covered', color: 'from-purple-500 to-purple-600' },
  { icon: TrendingUp, number: 97, suffix: '%', label: 'Approval Rate', color: 'from-orange-500 to-orange-600' },
  { icon: Star, number: 4.9, suffix: '/5', label: 'Google Rating', color: 'from-yellow-500 to-yellow-600', isDecimal: true },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-surface-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container-custom relative">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-card-hover transition-all duration-300 border border-surface-100 hover:border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Number */}
              <div className="text-3xl lg:text-4xl font-extrabold text-text mb-1">
                {stat.isDecimal ? (
                  <span>{stat.number}{stat.suffix}</span>
                ) : (
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                )}
              </div>
              
              {/* Label */}
              <div className="text-sm text-text-light font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
