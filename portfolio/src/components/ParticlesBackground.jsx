import { useEffect, useRef } from 'react'

const COLORS = ['#FF3B30', '#8B5CF6', '#00E5FF']

export default function ParticlesBackground({ count = 70 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, raf
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const init = () => {
      resize()
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
      })
      ctx.globalAlpha = 1
      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    const onResize = () => {
      resize()
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* gradient blobs */}
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-crimson/25 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-20 h-[26rem] w-[26rem] rounded-full bg-violet/25 blur-[120px] animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan/20 blur-[120px] animate-blob [animation-delay:4s]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 grid-overlay opacity-40" />
    </div>
  )
}
