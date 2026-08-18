'use client'

import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function About() {
  const aboutInfo = [
    { label: 'Name', value: 'Feven Tolosa', icon: User },
    { label: 'Location', value: 'Addis Ababa, Ethiopia', icon: MapPin },
    { label: 'Email', value: 'feventolosa14@gmail.com', icon: Mail },
    { label: 'Phone', value: '+251-939-733-939', icon: Phone },
  ]

  return (
    <section id='about' className='section-padding relative'>
      <div className='absolute top-1/2 left-0 w-[400px] h-[400px] bg-slate-400/5 rounded-full blur-[120px] -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='tag-pill px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4'>
            About Me
          </span>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Get to <span className='gradient-text'>Know Me</span>
          </h2>
          <p className='text-[var(--text-secondary)] max-w-2xl mx-auto'>
            A passionate developer dedicated to building exceptional digital
            experiences
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='glass-card rounded-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6 gradient-text'>
                Who I Am
              </h3>
              <div className='space-y-4 text-[var(--text-secondary)] leading-relaxed'>
                <p>
                  I am a dedicated full-stack developer based in Ethiopia,
                  specializing in building exceptional digital experiences. With a
                  strong foundation in both front-end and back-end technologies, I
                  create solutions that are visually appealing and highly
                  functional.
                </p>
                <p>
                  My approach combines creative design with technical expertise to
                  deliver user-friendly applications that meet both business goals
                  and user needs. I am constantly learning and adapting to new
                  technologies to stay at the forefront of web development.
                </p>
              </div>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 mt-8 gradient-btn px-6 py-3 rounded-xl font-medium text-sm'
              >
                Let&apos;s Connect
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutInfo.map((item, index) => (
              <motion.div
                key={index}
                className='glass-card rounded-2xl p-6 group cursor-default'
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className='w-12 h-12 rounded-xl bg-[var(--input-bg)] border border-[var(--border-glass)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <item.icon size={20} className='text-[var(--accent)]' />
                </div>
                <span className='block text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-1'>
                  {item.label}
                </span>
                <span className='text-[var(--text-primary)] font-medium text-sm'>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
