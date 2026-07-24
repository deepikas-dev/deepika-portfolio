import { useRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-crimson to-violet text-white shadow-glow-crimson hover:shadow-glow-violet',
  ghost:
    'border border-white/15 text-white hover:border-cyan/60 hover:shadow-glow-cyan bg-white/[0.02]',
  outline:
    'border border-violet/40 text-white hover:bg-violet/10 hover:shadow-glow-violet',
}

export default function MagneticButton({
  children,
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-200 ease-out"
      whileTap={{ scale: 0.95 }}
    >
      <Tag
        className={`relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
