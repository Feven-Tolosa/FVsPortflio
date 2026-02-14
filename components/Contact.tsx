'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id='contact'
      className='relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden'
    >
      {/* Glow Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20' />
        <div className='absolute bottom-20 right-20 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-20' />
      </div>

      <div className='max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start'>
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
            Let’s Build Something Amazing
          </h2>

          <p className='text-gray-400 mb-10'>
            Have a project idea or collaboration in mind? I’m always open to
            meaningful conversations.
          </p>

          <div className='space-y-6 text-gray-300'>
            <div>
              <p className='text-sm text-gray-500'>Email</p>
              <p className='text-lg'>feventolosa14@gmail.com</p>
            </div>

            <div>
              <p className='text-sm text-gray-500'>Phone</p>
              <p className='text-lg'>+251 939 733 939</p>
            </div>

            <div>
              <p className='text-sm text-gray-500'>Location</p>
              <p className='text-lg'>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex gap-4 mt-10'>
            {[
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/feven-t-42baa8323/',
              },
              { name: 'GitHub', url: 'https://github.com/Feven-Tolosa' },
              { name: 'Instagram', url: 'https://instagram.com/yourusername' },
              { name: 'Telegram', url: 'https://t.me/yourusername' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm'
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl'
        >
          <div className='grid md:grid-cols-2 gap-6'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              value={formData.name}
              onChange={handleChange}
              className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />

            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              value={formData.email}
              onChange={handleChange}
              className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          <input
            type='text'
            name='subject'
            placeholder='Subject'
            required
            value={formData.subject}
            onChange={handleChange}
            className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />

          <textarea
            name='message'
            rows={5}
            placeholder='Your Message...'
            required
            value={formData.message}
            onChange={handleChange}
            className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all duration-300 disabled:opacity-50'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className='text-green-400 text-sm'>
              Message sent successfully 💜
            </p>
          )}

          {status === 'error' && (
            <p className='text-red-400 text-sm'>
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
