import { motion } from 'framer-motion'
import { MousePointerClick, ClipboardList, FileSignature, Mail } from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    number: '1',
    title: 'Choose your plan',
    description: 'Pick the city & plan that fits your business.',
  },
  {
    icon: ClipboardList,
    number: '2',
    title: 'Submit details',
    description: 'Share KYC documents — we guide you through it.',
  },
  {
    icon: FileSignature,
    number: '3',
    title: 'Sign agreement',
    description: 'Digital agreement, NOC and utility bill issued.',
  },
  {
    icon: Mail,
    number: '4',
    title: 'Get your address',
    description: 'Use it for Business Compliance, registration and mailing — same week.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-surface-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f1a2e] mb-4">
            How It Works
          </h2>
          <p className="text-text-light text-lg">
            No paperwork hassle. No physical visit. Done in 3–5 working days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-primary-200" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#11417c] rounded-full flex items-center justify-center border-2 border-surface-50">
                  <span className="text-xs font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0f1a2e] mb-2">{step.title}</h3>
              <p className="text-sm text-text-light leading-relaxed max-w-[240px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
