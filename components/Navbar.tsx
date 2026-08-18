'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''))
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold gradient-text tracking-tight'>
          feven<span className='text-[var(--text-tertiary)]'>.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'gradient-text bg-[rgba(148,163,184,0.08)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(148,163,184,0.05)]'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggle}
            className='ml-3 p-2.5 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[rgba(148,163,184,0.2)] transition-all duration-300'
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? (
              <Sun size={16} className='text-amber-400' />
            ) : (
              <Moon size={16} className='text-slate-500' />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className='flex md:hidden items-center gap-2'>
          <button
            onClick={toggle}
            className='p-2.5 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]'
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? (
              <Sun size={16} className='text-amber-400' />
            ) : (
              <Moon size={16} className='text-slate-500' />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2 rounded-lg text-[var(--text-secondary)]'
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden mx-4 mt-3 rounded-2xl glass-card p-4 space-y-1'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.href.replace('#', '')
                  ? 'gradient-text bg-[rgba(148,163,184,0.08)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
