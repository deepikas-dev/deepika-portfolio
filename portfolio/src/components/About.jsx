import { motion } from 'framer-motion'
import { timeline, education } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="glass rounded-3xl p-8 sm:p-10 lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              I'm <span className="text-cyan glow-text-cyan">Deepika</span>, a frontend developer
              who treats interfaces as experiences, not just screens. Currently pursuing a BCA at
              SRM Arts and Science College, I spend my time between coursework and building
              production-quality React applications.
            </p>
            <p className="mt-5 text-white/60">
              My focus is on translating design intent into pixel-precise, performant code —
              blending clean architecture with motion that feels intentional, never decorative
              for its own sake.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-violet">Education</h4>
                <div className="mt-3 space-y-4">
                  {education.map((edu) => (
                    <div key={edu.qualification + edu.period}>
                      <p className="text-sm text-white/70">{edu.school}</p>
                      <p className="text-xs text-white/40">
                        {edu.qualification} <span className="text-cyan">|</span> {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Career Goal</h4>
                <p className="mt-2 text-sm text-white/70">
                  Land a frontend/React developer role where I can grow into full-stack product
                  engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={1}
            className="glass rounded-3xl p-8 sm:p-10 lg:col-span-2"
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Journey</h4>
            <div className="relative mt-6 space-y-8 border-l border-white/10 pl-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-crimson to-cyan shadow-glow-violet" />
                  <span className="font-mono text-xs text-cyan">{item.year}</span>
                  <h5 className="mt-1 font-semibold text-white">{item.title}</h5>
                  <p className="text-xs text-white/40">{item.org}</p>
                  <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-violet">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  )
}
