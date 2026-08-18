'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTilt } from './useTilt'

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt: 10, scale: 1.03 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='glass-card rounded-2xl overflow-hidden group'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className='relative overflow-hidden h-52'>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
        />
        {/* Hover overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5'>
          <div className='flex gap-2 flex-wrap'>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className='text-xs px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/10'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='font-semibold text-lg mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors'>
          {project.title}
        </h3>
        <p className='text-[var(--text-secondary)] text-sm mb-5 leading-relaxed line-clamp-2'>
          {project.description}
        </p>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-sm font-medium gradient-text hover:opacity-80 transition-opacity'
        >
          View Project
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  )
}

const projects = [
  {
    title: 'Selam Markets',
    description: 'An e-commerce platform for local vendors to sell their products online and for customers to discover and purchase a wide variety of goods.',
    image: '/images/project9.png',
    link: 'https://selam-markets.vercel.app/',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    category: 'web',
  },
  {
    title: 'Security System',
    description: 'A comprehensive security management platform with real-time monitoring and incident tracking.',
    image: '/images/project-6.png',
    link: 'https://security-system-ashen.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind'],
    category: 'web',
  },
  {
    title: 'EthioGard.com',
    description: 'Website for agricultural services and products connecting farmers with markets.',
    image: '/images/project-7.png',
    link: 'https://waf-theta.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'React'],
    category: 'web',
  },
  {
    title: 'Apple.com Clone',
    description: 'A faithful recreation of the Apple website with modern design and animations.',
    image: '/images/project-1.jpg',
    link: 'https://flourishing-gecko-ea3c57.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'clone',
  },
  {
    title: 'Netflix Clone',
    description: 'Streaming platform interface with movie catalog and search functionality.',
    image: '/images/project-2.jpg',
    link: 'https://spectacular-faun-e28c3b.netlify.app/',
    tags: ['React', 'Firebase', 'API'],
    category: 'clone',
  },
  {
    title: 'Mercy Photography',
    description: 'Portfolio website for a photography studio with gallery and booking features.',
    image: '/images/project-5.jpg',
    link: 'https://mercyphotostudio.netlify.app/',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'web',
  },
  {
    title: 'F3N Shopping',
    description: 'E-commerce shopping platform with modern UI and product management.',
    image: '/images/project-4.png',
    link: 'https://f3n-shopping.netlify.app/',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
  },
  {
    title: 'Influencer Market',
    description: 'A marketplace connecting influencers with brands for collaborations.',
    image: '/images/project-8.png',
    link: 'https://famous-two.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind'],
    category: 'web',
  },
  {
    title: 'JUSCDC Platform',
    description: 'Career Development Club website for student career resources.',
    image: '/images/project-9.png',
    link: 'https://juscdc-platform.vercel.app/',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    category: 'web',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Apps', value: 'web' },
    { name: 'Clones', value: 'clone' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id='projects' className='section-padding relative'>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-slate-500/5 rounded-full blur-[120px]' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='tag-pill px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4'>
            My Work
          </span>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Featured <span className='gradient-text'>Projects</span>
          </h2>
          <p className='text-[var(--text-secondary)] max-w-2xl mx-auto'>
            A showcase of my recent work demonstrating my skills and expertise
          </p>
        </motion.div>

        {/* Filters */}
        <div className='flex justify-center mb-12'>
          <div className='inline-flex rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] backdrop-blur-md p-1'>
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'gradient-btn shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className='text-center mt-14'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href='https://github.com/Feven-Tolosa'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 outline-btn px-8 py-3.5 rounded-xl font-medium'
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
