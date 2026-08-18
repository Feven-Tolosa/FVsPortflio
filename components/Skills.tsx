'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Layout, Shield } from 'lucide-react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    {
      name: 'HTML5',
      level: 95,
      color: 'from-slate-500 to-slate-600 ',
    },
    { name: 'CSS3', level: 95, color: 'from-slate-500 to-slate-600' },
    { name: 'JavaScript', level: 90, color: 'from-slate-500 to-slate-600' },
    { name: 'React', level: 95, color: 'from-slate-500 to-slate-600' },
    { name: 'Next.js', level: 85, color: 'from-slate-500 to-slate-600' },
    { name: 'Node.js', level: 85, color: 'from-slate-500 to-slate-600' },
    { name: 'Express', level: 90, color: 'from-slate-500 to-slate-600' },
    { name: 'MySQL', level: 85, color: 'from-slate-500 to-slate-600' },
    { name: 'Git & GitHub', level: 85, color: 'from-slate-500 to-slate-600' },
    { name: 'Tailwind CSS', level: 90, color: 'from-slate-500 to-slate-600' },
    { name: 'Supabase', level: 80, color: 'from-slate-500 to-slate-600' },
    { name: 'React Native', level: 75, color: 'from-slate-500 to-slate-600' },
    { name: 'TypeScript', level: 85, color: 'from-slate-500 to-slate-600' },
  ]

  const approaches = [
    {
      title: 'Performance First',
      description:
        'I build applications that are fast, efficient, and optimized for the best user experience.',
      icon: Zap,
      gradient: 'from-slate-500 to-slate-600',
    },
    {
      title: 'Responsive Design',
      description:
        'Creating interfaces that work beautifully on all devices from mobile to desktop.',
      icon: Layout,
      gradient: 'from-slate-400 to-slate-500',
    },
    {
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable code with best practices and modern patterns.',
      icon: Shield,
      gradient: 'from-slate-600 to-slate-700',
    },
  ]

  return (
    <section id='skills' className='section-padding relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-16'
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

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`glass-card rounded-xl p-5 transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className='flex justify-between items-center mb-3'>
                <span className='font-medium text-sm text-[var(--text-primary)]'>
                  {skill.name}
                </span>
                <span className='text-xs text-[var(--text-tertiary)]'>
                  {skill.level}%
                </span>
              </div>
              <div className='w-full bg-[var(--input-bg)] rounded-full h-2'>
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Approach */}
        <div className='grid md:grid-cols-3 gap-6'>
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              className='glass-card rounded-2xl p-8 text-center group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
