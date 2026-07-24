import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { skills } from '../data/content'
import { SectionHeading } from './About'

const ICONS = {
  HTML5: { icon: FaHtml5, color: '#E34F26' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6' },
  JavaScript: { icon: FaJs, color: '#F7DF1E' },
  'React.js': { icon: FaReact, color: '#61DAFB' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  GitHub: { icon: FaGithub, color: '#ffffff' },
  'Responsive Design': { icon: FaMobileAlt, color: '#00E5FF' },
}

function CircularSkill({ name, level, index }) {
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const meta = ICONS[name]
  const Icon = meta?.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col items-center rounded-2xl p-6 transition-shadow hover:shadow-glow-violet"
    >
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 108 108">
          <circle
            cx="54"
            cy="54"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <motion.circle
            cx="54"
            cy="54"
            r={radius}
            fill="none"
            stroke="url(#skill-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - level / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3B30" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {Icon && <Icon size={22} color={meta.color} className="mb-1" />}
          <span className="font-mono text-xs text-white/70">{level}%</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-white/80">{name}</p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Work With" title="Skills" />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <CircularSkill key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
