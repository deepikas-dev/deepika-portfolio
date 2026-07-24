import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WORDS = ['REACT', '✦', 'JAVASCRIPT', '✦', 'TAILWIND', '✦', 'GIT', '✦', 'UI/UX', '✦']

export default function MarqueeBanner() {
  const trackRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const track = trackRef.current
    if (!track || reduceMotion) return

    // Base infinite loop
    const baseTween = gsap.to(track, {
      xPercent: -50,
      duration: 22,
      ease: 'none',
      repeat: -1,
    })

    // Scroll velocity temporarily speeds the marquee up/reverses direction
    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = self.getVelocity() / 1000
        gsap.to(baseTween, {
          timeScale: gsap.utils.clamp(-4, 4, 1 + velocity),
          duration: 0.3,
          overwrite: true,
        })
      },
    })

    return () => {
      baseTween.kill()
      st.kill()
    }
  }, [])

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface/40 py-6">
      <div ref={trackRef} className="flex w-fit whitespace-nowrap">
        {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className={`mx-6 font-display text-3xl font-bold sm:text-5xl ${
              word === '✦' ? 'text-violet' : 'text-outline hover:text-gradient'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
