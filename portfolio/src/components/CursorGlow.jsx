import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', move)

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
