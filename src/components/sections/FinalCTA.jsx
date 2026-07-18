import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 bg-hero-mesh opacity-50" />
      
      {/* Decorative */}
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
            Ready to Get Your Premium{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
              Business Address?
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 mb-10 max-w-xl mx-auto">
            Join 5,000+ businesses that chose EaseMyOffice for their virtual office. 
            Get started in 2-3 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#hero"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 shadow-2xl shadow-black/20 transition-all text-base"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:8882735038"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all text-base"
            >
              <Phone className="w-4 h-4" />
              888-273-5038
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-blue-200/70">
            <span>✓ No hidden charges</span>
            <span>✓ Reply in 10 mins</span>
            <span>✓ 97% approval rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
