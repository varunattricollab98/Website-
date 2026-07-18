import { motion } from 'framer-motion'
import { MapPin, FileCheck, Zap, UserCheck, IndianRupee, Globe } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Premium Addresses',
    description: 'Real, verified commercial addresses across India\'s top business hubs.',
  },
  {
    icon: FileCheck,
    title: 'GST-Ready Paperwork',
    description: '100% compliant NOC, rent agreement & utility bills accepted by all officers.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'KYC to address handover in just 2-3 working days. No delays.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Manager',
    description: 'A single point of contact for setup, mail handling, and renewals.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Pay-as-you-grow plans starting at ₹699/month.',
  },
  {
    icon: Globe,
    title: 'Pan-India Coverage',
    description: '200+ addresses in all 28 states — expand wherever your customers are.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-50 relative">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Why Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Real Offices. Real Paperwork. <span className="gradient-text">Real People.</span>
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            What makes EaseMyOffice the most trusted platform for virtual offices in India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 lg:p-7 border border-surface-200 hover:border-primary-200 shadow-soft hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-text mb-2">{feature.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
