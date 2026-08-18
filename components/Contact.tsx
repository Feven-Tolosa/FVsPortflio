'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 4000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      value: 'feventolosa14@gmail.com',
      href: 'mailto:feventolosa14@gmail.com',
    },
    { icon: MapPin, value: 'Addis Ababa, Ethiopia', href: null },
  ]

  const socials = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/feven-mercy-42baa8323/',
      label: 'LinkedIn',
    },
    { icon: Github, href: 'https://github.com/Feven-Tolosa', label: 'GitHub' },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mercyfev_/',
      label: 'Instagram',
    },
    { icon: Send, href: 'https://t.me/TAFNEM', label: 'Telegram' },
  ]

  return (
    <section id='contact' className='section-padding relative overflow-hidden'>
      {/* Background glows */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px]' />

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='tag-pill px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4'>
            Get In Touch
          </span>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Let&apos;s Build Something{' '}
            <span className='gradient-text'>Amazing</span>
          </h2>
          <p className='text-[var(--text-secondary)] max-w-2xl mx-auto'>
            I&apos;m open to freelance work, internships, or collaborations
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='space-y-5 mb-10'>
              {contactInfo.map((item, i) => (
                <div key={i} className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0'>
                    <item.icon size={18} className='text-purple-500' />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className='text-[var(--text-secondary)] hover:text-purple-500 transition-colors'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className='text-[var(--text-secondary)]'>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className='flex gap-3'>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-purple-500 hover:border-purple-500/30 transition-all duration-300'
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='glass-card rounded-2xl p-8 space-y-5'
          >
            <div className='grid sm:grid-cols-2 gap-5'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                required
                value={formData.name}
                onChange={handleChange}
                className='w-full input-glass rounded-xl px-5 py-3.5 text-sm'
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full input-glass rounded-xl px-5 py-3.5 text-sm'
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              required
              value={formData.subject}
              onChange={handleChange}
              className='w-full input-glass rounded-xl px-5 py-3.5 text-sm'
            />
            <textarea
              name='message'
              rows={5}
              placeholder='Your Message...'
              required
              value={formData.message}
              onChange={handleChange}
              className='w-full input-glass rounded-xl px-5 py-3.5 text-sm resize-none'
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full gradient-btn py-3.5 rounded-xl font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-2'
            >
              {isSubmitting ? (
                <>
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex items-center gap-2 text-green-400 text-sm'
              >
                <CheckCircle size={16} />
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex items-center gap-2 text-red-400 text-sm'
              >
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
