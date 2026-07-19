import { useState, useEffect } from 'react'
import { Sparkles, X } from 'lucide-react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (~700px)
      setShow(window.scrollY > 700)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 bg-[#0f1a2e] text-white pl-5 pr-3 py-3 rounded-full shadow-[0_10px_40px_rgba(15,26,46,0.5)] border border-white/10">
        <Sparkles className="w-4 h-4 text-[#f59e0b]" />
        <span className="text-sm font-medium hidden sm:inline">Get your virtual office in 2–3 days</span>
        <span className="text-sm font-medium sm:hidden">Free Quote</span>
        <a
          href="#hero"
          className="ml-1 px-4 py-2 bg-primary hover:bg-primary-700 rounded-full text-sm font-bold transition-colors"
        >
          Get Free Quote
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="ml-1 w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-white/60" />
        </button>
      </div>
    </div>
  )
}
