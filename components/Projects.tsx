// components/Projects.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: 'Security System',
      description:
        'A comprehensive security management platform with real-time monitoring',
      image: '/images/project-6.png',
      link: 'https://security-system-ashen.vercel.app/',
      tags: ['Next.js', 'React', 'Tailwind'],
      category: 'web',
    },
    {
      title: 'EthioGard.com',
      description: 'Website for agricultural services and products',
      image: '/images/project-7.png',
      link: 'https://waf-theta.vercel.app/',
      tags: ['Next.js', 'Tailwind', 'React'],
      category: 'web',
    },
    {
      title: 'Apple.com Clone',
      description:
        'A faithful recreation of the Apple website with modern design',
      image: '/images/project-1.jpg',
      link: 'https://flourishing-gecko-ea3c57.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'clone',
    },
    {
      title: 'Netflix Clone',
      description: 'Streaming platform interface with movie catalog',
      image: '/images/project-2.jpg',
      link: 'https://spectacular-faun-e28c3b.netlify.app/',
      tags: ['React', 'Firebase', 'API'],
      category: 'clone',
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce platform with product listings and cart',
      image: '/images/project-3.jpg',
      link: 'https://amazonclonemercy.netlify.app/',
      tags: ['React', 'Context API', 'CSS'],
      category: 'clone',
    },
    {
      title: 'Mercy Photography',
      description: 'Portfolio website for a photography studio',
      image: '/images/project-5.jpg',
      link: 'https://mercyphotostudio.netlify.app/',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'web',
    },
    {
      title: 'F3N Shopping',
      description: 'E-commerce shopping platform with modern UI',
      image: '/images/project-4.png',
      link: 'https://f3n-shopping.netlify.app/',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
    },
    {
      title: 'Influencer Market',
      description: 'A marketplace connecting influencers with brands',
      image: '/images/project-8.png',
      link: 'https://famous-two.vercel.app/',
      tags: ['Next.js', 'React', 'Talwind'],
      category: 'web',
    },
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Applications', value: 'web' },
    { name: 'Clones', value: 'clone' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id='projects' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <span className='text-purple-600 dark:text-purple-400 font-medium'>
            My Work
          </span>
          <h2 className='text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white'>
            Featured Projects
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        {/* Filter buttons */}
        <div className='flex justify-center mb-12'>
          <div className='inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1'>
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter.value
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className='group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800'
            >
              <div className='relative overflow-hidden'>
                <div className='h-48 overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <div className='flex space-x-2'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='text-xs bg-purple-600 text-white px-2 py-1 rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='font-semibold text-xl mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium'
                >
                  View Project
                  <svg
                    className='w-4 h-4 ml-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://github.com/Feven-Tolosa'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg transition-all duration-300 font-medium'
          >
            View More on GitHub
            <svg
              className='w-5 h-5 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
