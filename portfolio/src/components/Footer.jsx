import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden pt-24">
      {/* animated wave */}
      <div
        aria-hidden="true"
        className="absolute -top-1 left-0 h-16 w-[200%] animate-wave opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 60'%3E%3Cpath d='M0 30 Q 25 0 50 30 T 100 30 T 150 30 T 200 30 T 250 30 T 300 30 T 350 30 T 400 30 T 450 30 T 500 30 T 550 30 T 600 30 T 650 30 T 700 30 T 750 30 T 800 30 T 850 30 T 900 30 T 950 30 T 1000 30' stroke='%238B5CF6' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat-x',
          backgroundSize: '1000px 60px',
        }}
      />

      <div className="relative border-t border-white/5 bg-surface/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-lg font-bold">
            DEEP<span className="text-crimson">IKA</span>
          </p>
          <p className="text-center font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Deepika S. Made with 🩷. All rights reserved.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-crimson via-violet to-cyan text-white shadow-glow-violet"
          >
            <FaArrowUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
