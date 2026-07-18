import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #11417c, #2c679e)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Set Up Your Virtual Office?
          </h2>
          <p className="text-lg text-blue-100/90 mb-10 max-w-xl mx-auto">
            Talk to a virtual office expert today — get a free quote in under 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hero"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#11417c] font-bold rounded-xl hover:bg-blue-50 shadow-2xl transition-all text-base"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:8882735038"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/10 transition-all text-base"
            >
              <Phone className="w-4 h-4" />
              888-273-5038
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
