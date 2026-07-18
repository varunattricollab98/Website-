import { motion } from 'framer-motion'
import { MousePointer, FileText, PenTool, Mail } from 'lucide-react'

const steps = [
  {
    icon: MousePointer,
    number: '01',
    title: 'Choose Your Plan',
    description: 'Pick the city and plan that fits your business needs and budget.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Submit KYC Details',
    description: 'Share your documents — we guide you through the entire process.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Sign Agreement',
    description: 'Digital agreement signed. NOC and utility bill issued same day.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Mail,
    number: '04',
    title: 'Address Ready',
    description: 'Use it for GST, company registration, and mailing — within 2-3 days.',
    color: 'from-orange-500 to-amber-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Get Started in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            No paperwork hassle. No physical visit. Done in 2-3 working days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Step circle */}
              <div className="relative inline-flex mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full border-2 border-surface-200 flex items-center justify-center shadow-sm">
                  <span className="text-[10px] font-bold text-text">{step.number}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text-light leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
