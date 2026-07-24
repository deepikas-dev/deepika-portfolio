import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'glass py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#hero" className="font-display text-xl font-bold tracking-wide text-white">
            DEEP<span className="text-crimson glow-text-crimson">IKA</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    active === link.href ? 'text-cyan' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-cyan shadow-glow-cyan"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-5 py-2 font-mono text-xs uppercase tracking-widest text-white transition-all hover:border-violet hover:shadow-glow-violet lg:inline-block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-7 bg-white" />
            <span className="h-px w-5 self-end bg-cyan" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-2xl text-white">
                ✕
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
