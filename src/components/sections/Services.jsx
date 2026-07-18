import { motion } from 'framer-motion'
import { Building2, Users, Video, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Virtual Office',
    description: 'Premium business address for GST registration, company incorporation, and professional mailing.',
    features: ['GST & APOB Registration', 'Company (MCA) Registration', 'Mail & Courier Handling', 'NOC, Agreement & Utility Bill'],
    price: 'From ₹699/mo',
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    link: '/virtual-office',
    popular: true,
  },
  {
    icon: Users,
    title: 'Coworking Spaces',
    description: 'Fully-equipped workspaces for teams of any size. Dedicated seats, private cabins, and hot desks.',
    features: ['Dedicated Seats & Cabins', 'High-Speed Internet', '24/7 Access Available', 'Pan-India Locations'],
    price: 'From ₹4,999/mo',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    link: '/coworking',
  },
  {
    icon: Video,
    title: 'Meeting Rooms',
    description: 'Professional meeting and conference rooms available by the hour or day with modern amenities.',
    features: ['Hourly & Daily Booking', 'Video Conferencing Setup', 'Whiteboard & Projector', 'Refreshments Included'],
    price: 'From ₹499/hr',
    color: 'from-purple-500 to-violet-600',
    bgLight: 'bg-purple-50',
    link: '/meeting-rooms',
  },
  {
    icon: FileText,
    title: 'CA Services',
    description: 'Complete compliance services — GST registration, company registration, ITR filing, and trademark.',
    features: ['GST Registration', 'Company Registration', 'Income Tax E-Filing', 'Trademark Registration'],
    price: 'From ₹1,499',
    color: 'from-orange-500 to-amber-600',
    bgLight: 'bg-orange-50',
    link: '/ca-services',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Everything Your Business Needs,{' '}
            <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            From virtual offices to CA services — we're the only platform in India that covers your complete business setup needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative group bg-white rounded-2xl border border-surface-200 hover:border-primary-200 p-7 lg:p-8 hover-lift overflow-hidden ${service.popular ? 'ring-2 ring-primary/10' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-1">{service.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                    <span className="text-xs lg:text-sm text-text-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-5 border-t border-surface-100">
                <span className="text-lg font-bold text-text">{service.price}</span>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-700 group-hover:gap-2.5 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
