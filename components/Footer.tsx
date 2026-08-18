import { Github, Linkedin, Instagram, Send } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/Feven-Tolosa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/feven-mercy-42baa8323/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/mercyfev_/', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/TAFNEM', label: 'Telegram' },
  ]

  return (
    <footer className='border-t border-[var(--border-subtle)] py-12'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <span className='text-lg font-bold gradient-text'>feven.dev</span>
          <p className='text-[var(--text-tertiary)] text-sm mt-1'>
            &copy; {new Date().getFullYear()} Feven Tolosa. All rights reserved.
          </p>
        </div>
        <div className='flex gap-3'>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[var(--text-tertiary)] hover:text-purple-500 hover:border-purple-500/30 transition-all duration-300'
              aria-label={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
