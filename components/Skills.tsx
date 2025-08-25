// components/Skills.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: 'HTML5', level: 95, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
    { name: 'React', level: 95, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Next.js', level: 80, color: 'from-gray-800 to-gray-900' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'Express', level: 90, color: 'from-gray-500 to-gray-600' },
    { name: 'MySQL', level: 85, color: 'from-blue-400 to-blue-500' },
    { name: 'Git & GitHub', level: 85, color: 'from-gray-700 to-gray-800' },
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-500' },
    { name: 'React Native', level: 75, color: 'from-blue-600 to-blue-700' },
    {
      name: 'API Development',
      level: 85,
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section
      id='skills'
      className='py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full bg-grid-pattern'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mb-16'>
          <span className='text-purple-600 dark:text-purple-400 font-medium'>
            My Skills
          </span>
          <h2 className='text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white'>
            What I Bring to the Table
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            I work with a range of technologies to create comprehensive web
            solutions
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className='flex justify-between mb-2'>
                <span className='font-medium text-gray-800 dark:text-gray-200'>
                  {skill.name}
                </span>
                <span className='text-gray-600 dark:text-gray-400'>
                  {skill.level}%
                </span>
              </div>
              <div className='w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3'>
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white'>
            My Development Approach
          </h3>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-7 h-7 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  ></path>
                </svg>
              </div>
              <h4 className='font-semibold text-lg mb-2 text-gray-800 dark:text-white'>
                Performance First
              </h4>
              <p className='text-gray-600 dark:text-gray-400'>
                I build applications that are fast, efficient, and optimized for
                the best user experience.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-7 h-7 text-pink-600 dark:text-pink-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                  ></path>
                </svg>
              </div>
              <h4 className='font-semibold text-lg mb-2 text-gray-800 dark:text-white'>
                Responsive Design
              </h4>
              <p className='text-gray-600 dark:text-gray-400'>
                Creating interfaces that work beautifully on all devices from
                mobile to desktop.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-7 h-7 text-yellow-600 dark:text-yellow-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  ></path>
                </svg>
              </div>
              <h4 className='font-semibold text-lg mb-2 text-gray-800 dark:text-white'>
                Clean Code
              </h4>
              <p className='text-gray-600 dark:text-gray-400'>
                Writing maintainable, scalable code with best practices and
                modern patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
