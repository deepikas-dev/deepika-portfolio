import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaLayerGroup, FaReact } from 'react-icons/fa'
import { services } from '../data/content'
import { SectionHeading } from './About'

const ICONS = { code: FaCode, devices: FaMobileAlt, layout: FaLayerGroup, react: FaReact }

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How I Can Help" title="Services" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group glass relative overflow-hidden rounded-2xl p-7 transition-shadow hover:shadow-glow-cyan"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-crimson via-violet to-cyan opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <Icon className="text-cyan" size={28} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/60">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
