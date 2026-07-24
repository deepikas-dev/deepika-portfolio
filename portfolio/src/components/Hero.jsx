import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'
import FloatingShapes from './FloatingShapes'
import MagneticButton from './MagneticButton'
import { roles } from '../data/content'

function useTypingEffect(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

const nameLetters = 'Deepika'.split('')

export default function Hero() {
  const typed = useTypingEffect(roles)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6"
    >
      <ParticlesBackground />
      <FloatingShapes />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 pt-24 text-center lg:pt-0">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/70"
        >
          Available for opportunities
        </motion.span>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 animate-blob rounded-full bg-gradient-to-br from-crimson via-violet to-cyan opacity-60 blur-2xl" />
          <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 p-1 shadow-glow-violet sm:h-32 sm:w-32">
            <img
              src="/profile.jpg"
              alt="Portrait of Deepika S"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="sr-only">Deepika</span>
            <span aria-hidden="true" className="flex justify-center gap-1 sm:gap-2">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0, rotateX: -60 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 font-mono text-lg text-white/70 sm:text-2xl"
          >
            <span className="text-cyan glow-text-cyan">{typed}</span>
            <span className="animate-pulse text-violet">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-sm text-white/50 sm:text-base"
          >
            I design and build cinematic, high-performance interfaces — turning ideas into
            interactive experiences that feel as good as they look.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton as="a" href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton as="a" href="/resume.pdf" download variant="outline">
            Download Resume
          </MagneticButton>
          <MagneticButton as="a" href="#contact" variant="ghost">
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-cyan shadow-glow-cyan" />
        </motion.div>
      </motion.a>
    </section>
  )
}
