import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs as faqData } from '../../data/faq'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-primary-200 bg-primary-50/30 shadow-soft' : 'border-surface-200 bg-white hover:border-primary-100'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
      >
        <span className={`text-sm lg:text-base font-semibold pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-text'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-surface-100 text-text-light'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <p className="text-sm text-text-light leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-surface-50 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Got Questions?
              </h2>
              <p className="text-text-light mb-6">
                Everything you need to know before getting your virtual office. Can't find what you're looking for?
              </p>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-700 shadow-lg shadow-primary/25 transition-all"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
