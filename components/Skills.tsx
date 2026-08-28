'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Layout,
  Shield,
  Code2,
  Wrench,
} from 'lucide-react'

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 90 },
  { name: 'MySQL', level: 85 },
  { name: 'Supabase', level: 80 },
]

const tools = [
  { name: 'Git & GitHub', level: 85 },
  { name: 'VS Code', level: 95 },
  { name: 'Figma', level: 80 },
  { name: 'Postman', level: 85 },
  { name: 'Linux', level: 80 },
  { name: 'Docker', level: 75 },
]

const ACCENT = 'from-slate-500 to-slate-700'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderCards = (list: { name: string; level: number }[]) =>
    list.concat(list).map((skill, index) => (
      <div
        key={`${skill.name}-${index}`}
        className={`glass-card rounded-xl px-6 py-4 shrink-0 min-w-[150px] text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-transparent hover:border-[var(--border-glass)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${index * 40}ms` }}
      >
        <span className='font-medium text-sm text-[var(--text-primary)]'>
          {skill.name}
        </span>
        <div className='mt-2 flex items-center justify-center gap-1'>
          {Array.from({ length: 5 }).map((_, dot) => (
            <span
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${
                dot < Math.round(skill.level / 20)
                  ? `bg-gradient-to-r ${ACCENT}`
                  : 'bg-[var(--text-tertiary)] opacity-30'
              }`}
            />
          ))}
        </div>
      </div>
    ))

  return (
    <section id='skills' className='section-padding relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-[120px]' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-12 sm:mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='tag-pill px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4'>
            My Skills
          </span>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            What I Bring to the <span className='gradient-text'>Table</span>
          </h2>
          <p className='text-[var(--text-secondary)] max-w-2xl mx-auto'>
            A range of technologies I use to create comprehensive web solutions
          </p>
        </motion.div>

        {/* Skill marquees — infinite rotation */}
        <div className='flex flex-col gap-10 mb-20'>
          {/* Row 1: Frontend + Backend combined */}
          <div>
            <div className='flex items-center gap-3 mb-3'>
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${ACCENT} flex items-center justify-center shadow-lg shadow-slate-500/20`}
              >
                <Code2 size={18} className='text-white' />
              </div>
              <h3 className='font-semibold text-lg text-[var(--text-primary)]'>
                Frontend + Backend
              </h3>
            </div>
            <div className='marquee-mask overflow-hidden group'>
              <div className='flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused] py-2'>
                {renderCards(skills)}
              </div>
            </div>
          </div>

          {/* Row 2: Tools — opposite direction */}
          <div>
            <div className='flex items-center gap-3 mb-3'>
              <div className='h-10 w-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg shadow-slate-700/20'>
                <Wrench size={18} className='text-white' />
              </div>
              <h3 className='font-semibold text-lg text-[var(--text-primary)]'>
                Tools
              </h3>
            </div>
            <div className='marquee-mask overflow-hidden group'>
              <div className='flex gap-4 w-max animate-marquee [animation-direction:reverse] group-hover:[animation-play-state:paused] py-2'>
                {renderCards(tools)}
              </div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title: 'Performance First',
              description:
                'I build applications that are fast, efficient, and optimized for the best user experience.',
              icon: Zap,
              gradient: 'from-slate-400 to-slate-600',
            },
            {
              title: 'Responsive Design',
              description:
                'Creating interfaces that work beautifully on all devices from mobile to desktop.',
              icon: Layout,
              gradient: 'from-slate-500 to-slate-700',
            },
            {
              title: 'Clean Code',
              description:
                'Writing maintainable, scalable code with best practices and modern patterns.',
              icon: Shield,
              gradient: 'from-slate-600 to-slate-800',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className='glass-card rounded-2xl p-8 text-center group relative overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
              />
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
              >
                <item.icon size={28} className='text-white' />
              </div>
              <h4 className='font-semibold text-lg mb-3 text-[var(--text-primary)]'>
                {item.title}
              </h4>
              <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
