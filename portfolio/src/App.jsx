import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import MarqueeBanner from './components/MarqueeBanner'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  // Lenis smooth scroll, wired into GSAP's ticker so ScrollTrigger stays in sync
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  // Lock scroll while the loader is active
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <Loader onDone={() => setLoading(false)} />
      {!loading && (
        <>
          <CursorGlow />
          <Navbar />
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <MarqueeBanner />
            <Projects />
            <Experience />
            <Services />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
