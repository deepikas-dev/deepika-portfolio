import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAME = 'DEEPIKA'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1800

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setProgress(Math.floor(t * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setExit(true), 250)
        setTimeout(() => onDone?.(), 1050)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="relative flex gap-1 sm:gap-2 overflow-hidden">
            {NAME.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="font-display text-4xl sm:text-6xl font-bold tracking-widest text-white"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-white/50"
          >
            <span>LOADING EXPERIENCE</span>
            <span className="text-cyan glow-text-cyan">{progress}%</span>
          </motion.div>

          <div className="mt-4 h-[2px] w-56 sm:w-72 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-crimson via-violet to-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
