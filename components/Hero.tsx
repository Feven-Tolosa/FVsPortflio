'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

const roles = [
  'Full-Stack Developer',
  'React Specialist',
  'Next.js Expert',
  'UI/UX Enthusiast',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id='home'
      className='min-h-screen flex items-center relative overflow-hidden pt-20'
    >
      {/* Ambient glow blobs — muted blue/gray */}
      <div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px]' />
      <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
          {/* Left Content */}
          <div className='lg:w-1/2'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className='inline-block px-4 py-1.5 rounded-full text-xs font-medium tag-pill mb-6'>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I&apos;m{' '}
              <span className='gradient-text'>Feven Tolosa</span>
            </motion.h1>

            <motion.div
              className='text-2xl sm:text-3xl font-medium mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className='text-[var(--text-secondary)]'>I&apos;m a </span>
              <span className='gradient-text'>
                {displayText}
              </span>
              <span className='inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 animate-pulse' />
            </motion.div>

            <motion.p
              className='text-[var(--text-secondary)] text-lg max-w-lg mb-10 leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Crafting exceptional digital experiences with modern technologies.
              I transform ideas into scalable, performant web applications.
            </motion.p>

            <motion.div
              className='flex flex-wrap gap-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href='#projects'
                className='gradient-btn px-8 py-3.5 rounded-xl font-medium inline-flex items-center gap-2'
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href='#contact'
                className='outline-btn px-8 py-3.5 rounded-xl font-medium inline-flex items-center gap-2'
              >
                Let&apos;s Talk
                <MessageCircle size={18} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className='flex gap-12 mt-14'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Built' },
                { value: '6+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className='text-3xl font-bold gradient-text'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-[var(--text-tertiary)] mt-1'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            className='lg:w-1/2 flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className='relative'>
              {/* Glow ring */}
              <div className='absolute -inset-4 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-full opacity-15 blur-xl animate-pulse-glow' />

              {/* Image container */}
              <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[var(--border-glass)] glass-card p-2'>
                <div className='w-full h-full rounded-full overflow-hidden'>
                  <Image
                    src='/images/hero.jpg'
                    alt='Feven Tolosa'
                    width={400}
                    height={400}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className='absolute -top-2 -right-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold gradient-text'
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                React & Next.js
              </motion.div>

              <motion.div
                className='absolute -bottom-2 -left-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-[var(--text-secondary)]'
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                Full-Stack Dev
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className='w-6 h-10 border-2 border-[var(--text-tertiary)] rounded-full flex justify-center opacity-40'>
          <motion.div
            className='w-1.5 h-3 bg-[var(--accent)] rounded-full mt-2'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
