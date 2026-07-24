import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/content'
import { SectionHeading } from './About'

function TiltCard({ project }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`,
    })
  }

  const reset = () => setStyle({ transform: 'perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)' })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ ...style, transformStyle: 'preserve-3d', transition: 'transform 0.3s ease-out' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass group relative overflow-hidden rounded-3xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-crimson to-violet px-4 py-2 text-xs font-semibold shadow-glow-crimson transition-shadow hover:shadow-glow-violet"
          >
            <FaExternalLinkAlt size={11} /> Live Demo
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold transition-colors hover:border-cyan hover:text-cyan"
          >
            <FaGithub size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category.split(' ·')[0]))],
    []
  )
  const [active, setActive] = useState('All')
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured && (active === 'All' || p.category.startsWith(active)))

  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects" />

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="glass relative mt-16 grid overflow-hidden rounded-3xl lg:grid-cols-2"
          >
            <div className="relative h-64 lg:h-full">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="w-fit rounded-full bg-gradient-to-r from-crimson to-cyan px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-black">
                Featured Project
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{featured.title}</h3>
              <p className="mt-3 text-white/60">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={featured.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-crimson to-violet px-5 py-2.5 text-xs font-semibold shadow-glow-crimson"
                >
                  <FaExternalLinkAlt size={11} /> Live Demo
                </a>
                <a
                  href={featured.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold hover:border-cyan hover:text-cyan"
                >
                  <FaGithub size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category filter */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                active === cat
                  ? 'bg-gradient-to-r from-crimson to-violet text-white shadow-glow-violet'
                  : 'border border-white/10 text-white/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
