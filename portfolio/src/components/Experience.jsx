import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa'
import { experience } from '../data/content'
import { SectionHeading } from './About'

const ICONS = {
  internship: { icon: FaBriefcase, color: 'text-crimson', glow: 'shadow-glow-crimson' },
  certificate: { icon: FaCertificate, color: 'text-violet', glow: 'shadow-glow-violet' },
  achievement: { icon: FaTrophy, color: 'text-cyan', glow: 'shadow-glow-cyan' },
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Where I've Grown" title="Experience" />

        <div className="relative mt-16 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((item, i) => {
            const meta = ICONS[item.type]
            const Icon = meta.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className={`absolute -left-[41px] sm:-left-[49px] top-0 flex h-8 w-8 items-center justify-center rounded-full glass ${meta.glow}`}
                >
                  <Icon className={meta.color} size={13} />
                </span>

                <div className="glass rounded-2xl p-6 transition-shadow hover:shadow-glow-violet">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/40">{item.org}</p>
                  <p className="mt-3 text-sm text-white/65">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
