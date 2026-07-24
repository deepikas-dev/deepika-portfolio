import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { socials } from '../data/content'
import { SectionHeading } from './About'

const SOCIAL_ICONS = { github: FaGithub, linkedin: FaLinkedin, mail: FaEnvelope, phone: FaPhone }

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get In Touch" title="Contact" />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="glass space-y-5 rounded-3xl p-8 sm:p-10 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/50">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-cyan"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/50">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-cyan"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/50">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-violet"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/50">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-crimson"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-crimson via-violet to-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
              <FaPaperPlane size={13} />
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent ✓'}
            </button>
          </motion.form>

          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass space-y-4 rounded-3xl p-8">
              <ContactRow icon={FaEnvelope} label="Email" value="deeps01116@gmail.com" href="mailto:deeps01116@gmail.com" />
              <ContactRow icon={FaPhone} label="Phone" value="+91 63806 91228" href="tel:+916380691228" />
              <ContactRow icon={FaLinkedin} label="LinkedIn" value="linkedin.com/in/deepika-s-b1a50a398" href="https://linkedin.com/in/deepika-s-b1a50a398" />
              <ContactRow icon={FaGithub} label="GitHub" value="github.com/deepikas-dev" href="https://github.com/deepikas-dev" />
            </div>

            <div className="glass overflow-hidden rounded-3xl">
              <iframe
                title="Chennai, Tamil Nadu location map"
                src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
                className="h-48 w-full grayscale invert-[0.9] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="glass flex justify-center gap-4 rounded-3xl p-6">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon]
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-cyan hover:text-cyan hover:shadow-glow-cyan"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-cyan">
        <Icon size={14} />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">{label}</p>
        <p className="text-sm text-white/80">{value}</p>
      </div>
    </a>
  )
}
