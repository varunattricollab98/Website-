import { ShieldCheck, Zap, MapPin, Award, Clock, IndianRupee, FileCheck, Building2 } from 'lucide-react'

const items = [
  { icon: IndianRupee, text: 'Zero Hidden Charges' },
  { icon: Award, text: '97% Approval Rate' },
  { icon: MapPin, text: '200+ Premium Addresses' },
  { icon: Clock, text: 'Ready in 2–3 Days' },
  { icon: Building2, text: 'All 28 States Covered' },
  { icon: ShieldCheck, text: '100% Compliant Documents' },
  { icon: FileCheck, text: 'Dedicated Account Manager' },
  { icon: Zap, text: '5,000+ Businesses Served' },
]

export default function TrustMarquee() {
  return (
    <section className="bg-[#0f1a2e] py-4 overflow-hidden relative">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0f1a2e] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0f1a2e] to-transparent pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-8 flex-shrink-0">
            <item.icon className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-white/90">{item.text}</span>
            <span className="w-1 h-1 rounded-full bg-white/20 ml-6" />
          </div>
        ))}
      </div>
    </section>
  )
}
