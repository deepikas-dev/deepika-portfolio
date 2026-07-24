import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import { certifications } from '../data/content'
import { SectionHeading } from './About'

export default function Certifications() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % certifications.length), 5000)
    return () => clearInterval(id)
  }, [])

  const c = certifications[index]

  return (
    <section id="certifications" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Recognition" title="Certifications" />

        <div className="glass relative mt-16 min-h-[280px] rounded-3xl p-8 sm:p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson via-violet to-cyan shadow-glow-violet">
            <FaCertificate size={22} className="text-black" />
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {c.date}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-violet">{c.issuer}</p>
              <p className="mt-4 text-white/60">{c.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            {certifications.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to certificate ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-8 bg-gradient-to-r from-crimson to-cyan' : 'w-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
