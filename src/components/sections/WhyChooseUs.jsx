import { motion } from 'framer-motion'
import { MapPin, FileCheck, Zap, UserCheck, IndianRupee, Globe } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Premium addresses',
    description: "Real, verified commercial addresses across India's top business hubs.",
  },
  {
    icon: FileCheck,
    title: 'Business Compliance-ready paperwork',
    description: '100% compliant NOC, rent agreement & utility bills accepted by Business Compliance officers.',
  },
  {
    icon: Zap,
    title: 'Fast turnaround',
    description: 'KYC to address handover in just 3–5 working days.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated manager',
    description: 'A single point of contact for setup, mail handling and renewals.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent pricing',
    description: 'No hidden fees. Pay-as-you-grow plans starting at ₹699/month.',
  },
  {
    icon: Globe,
    title: 'Pan-India coverage',
    description: '200+ addresses in all 28 states — expand wherever your customers are.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="text-text-light text-lg">
            Real offices. Real paperwork. Real people behind every address.
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
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-[#0f1a2e] mb-2">{feature.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
