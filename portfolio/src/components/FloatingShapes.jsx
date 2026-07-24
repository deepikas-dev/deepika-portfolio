import { motion } from 'framer-motion'

const Shape = ({ className, borderColor, delay, duration, size, shape }) => {
  const base = 'absolute border backdrop-blur-sm'
  const radius = shape === 'circle' ? 'rounded-full' : shape === 'square' ? 'rounded-lg' : ''
  const clipPath = shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined

  return (
    <motion.div
      className={`${base} ${radius} ${className}`}
      style={{
        width: size,
        height: size,
        borderColor,
        clipPath,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        y: [0, -30, 0],
        rotateX: [0, 180, 360],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden [perspective:1200px] sm:block">
      <Shape
        className="left-[8%] top-[20%]"
        borderColor="rgba(255,59,48,0.5)"
        size={70}
        shape="square"
        duration={9}
        delay={0}
      />
      <Shape
        className="right-[12%] top-[15%]"
        borderColor="rgba(139,92,246,0.55)"
        size={100}
        shape="circle"
        duration={11}
        delay={1}
      />
      <Shape
        className="left-[15%] bottom-[18%]"
        borderColor="rgba(0,229,255,0.5)"
        size={56}
        shape="triangle"
        duration={8}
        delay={0.5}
      />
      <Shape
        className="right-[18%] bottom-[22%]"
        borderColor="rgba(255,59,48,0.4)"
        size={44}
        shape="circle"
        duration={10}
        delay={2}
      />
      <Shape
        className="left-1/2 top-[8%]"
        borderColor="rgba(139,92,246,0.4)"
        size={36}
        shape="square"
        duration={7}
        delay={1.5}
      />
    </div>
  )
}
