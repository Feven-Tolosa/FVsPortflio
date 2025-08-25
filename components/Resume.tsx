// components/Resume.tsx
'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description:
        'Developing web applications using React, Next.js, Node.js, and various databases. Collaborating with clients to create solutions that meet their business needs.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Company',
      period: '2021 - 2022',
      description:
        'Worked on UI/UX improvements, implemented responsive designs, and collaborated with the backend team to integrate APIs.',
    },
  ]

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Addis Ababa University',
      period: '2020 - 2024',
      description:
        'Focus on software engineering, web technologies, and database management.',
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Online Platform',
      period: '2022',
      description:
        'Intensive training in modern web development technologies and best practices.',
    },
  ]

  return (
    <section id='resume' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='text-purple-600 dark:text-purple-400 font-medium'>
            My Resume
          </span>
          <h2 className='text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white'>
            Experience & Education
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Here is a summary of my education and professional experience
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center'>
              <span className='w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3'>
                <svg
                  className='w-4 h-4 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  ></path>
                </svg>
              </span>
              Experience
            </h3>

            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className='relative pl-10 before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-purple-600 before:rounded-full'
                  variants={fadeIn}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-xl'>
                    <h4 className='font-semibold text-lg text-gray-800 dark:text-white'>
                      {exp.title}
                    </h4>
                    <p className='text-purple-600 dark:text-purple-400 mb-2'>
                      {exp.company} • {exp.period}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center'>
              <span className='w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3'>
                <svg
                  className='w-4 h-4 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l9-5-9-5-9 5 9 5z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0v6'
                  ></path>
                </svg>
              </span>
              Education
            </h3>

            <div className='space-y-8'>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className='relative pl-10 before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-purple-600 before:rounded-full'
                  variants={fadeIn}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-xl'>
                    <h4 className='font-semibold text-lg text-gray-800 dark:text-white'>
                      {edu.degree}
                    </h4>
                    <p className='text-purple-600 dark:text-purple-400 mb-2'>
                      {edu.institution} • {edu.period}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download button */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href='/resume.pdf' // Replace with actual resume path
            download
            className='inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/30'
          >
            Download Resume
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
