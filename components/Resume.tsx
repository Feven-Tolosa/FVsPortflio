// components/Resume.tsx (updated for standalone page)
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ResumeProps {
  isStandalone?: boolean
}

export default function Resume({ isStandalone = false }: ResumeProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Information Network Security Agency',
      period: 'Jul 2025 - Present',
      description: 'Working on security-focused web applications and systems.',
      location: 'Ethiopia',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Faulcon Enterprise LLC',
      period: 'Jul 2025 - Present',
      description:
        'Reviewed and optimized an existing codebase, implementing frontend improvements using Next.js & Tailwind CSS for enhanced UI/UX. Supported backend development, integrating APIs with Node.js & MySQL and debugging performance-critical issues.',
      location: 'USA',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Debo Engineering',
      period: 'Dec 2024 - Jun 2025',
      description:
        'Developed full-stack web apps using Next.js, React, Node.js, Express, and MySQL. Built responsive UIs with React & Next.js and integrated RESTful APIs with Node.js/Express. Designed and optimized MySQL databases for efficient data handling.',
      location: 'Ethiopia',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Evangeli Networks',
      period: 'Apr 2024 - Oct 2024',
      description:
        'Built and enhanced full-stack applications using React for the front end. Integrated RESTful APIs and managed state efficiently to ensure smooth data flow and real-time updates across the application. Created dynamic and responsive user interfaces to improve user engagement and experience.',
      location: 'Remote USA',
    },
  ]

  const projects = [
    {
      title: 'Furniture E-commerce Platform',
      company: 'Information Network Security Administration',
      period: 'Aug 2025 - Present',
      description:
        'Developed a furniture e-commerce platform using Next.js, Node.js and MySQL, handling both frontend product displays and backend APIs. Implemented secure user authentication with Firebase and Google login, including bot protection using reCAPTCHA. Integrated Stripe payment processing with fraud detection and data encryption.',
      location: 'Addis Ababa',
    },
    {
      title: 'Photo Studio Application',
      company: 'Debo Engineering',
      period: 'Dec 2024 - Jan 2025',
      description:
        'Designed and developed a full-stack Photo Studio Application using React.js for the front end and MySQL for database management, enabling efficient storage and retrieval of user data and media. Implemented features such as image uploads, user authentication, and gallery management to create a seamless user experience. Ensured responsive design and optimized performance, integrating RESTful APIs for smooth communication between the front end and back end.',
      location: 'Remote Jimma',
    },
  ]

  const education = [
    {
      degree: "Bachelor's degree",
      institution: 'Jimma University',
      period: '2024',
      description: "Completed bachelor's degree program.",
    },
    {
      degree: 'Boot camp',
      institution: 'Evangadi Networks',
      period: '2024',
      description: 'Completed intensive web development bootcamp.',
    },
  ]

  const skills = [
    { name: 'Next.js', level: 80 },
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 90 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Redux', level: 85 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'UX/UI Design', level: 85 },
  ]

  return (
    <section
      id='resume'
      className={`py-20 bg-white dark:bg-gray-900 ${
        isStandalone ? 'min-h-screen' : ''
      }`}
    >
      <div className='container mx-auto px-6'>
        {/* Back button for standalone page */}
        {isStandalone && (
          <div className='mb-8'>
            <Link
              href='/'
              className='inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                ></path>
              </svg>
              Back to Home
            </Link>
          </div>
        )}

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
            Here is a summary of my professional experience and education
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </span>
            Technical Skills
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg'
                variants={fadeIn}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className='flex justify-between mb-2'>
                  <span className='font-medium text-gray-800 dark:text-gray-200'>
                    {skill.name}
                  </span>
                  <span className='text-gray-600 dark:text-gray-400'>
                    {skill.level}%
                  </span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div
                    className='h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
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
              Work Experience
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
                    <p className='text-gray-500 dark:text-gray-400 text-sm mb-3'>
                      {exp.location}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Projects */}
          <div>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mb-12'
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

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    ></path>
                  </svg>
                </span>
                Key Projects
              </h3>

              <div className='space-y-8'>
                {projects.map((project, index) => (
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
                        {project.title}
                      </h4>
                      <p className='text-purple-600 dark:text-purple-400 mb-2'>
                        {project.company} • {project.period}
                      </p>
                      <p className='text-gray-500 dark:text-gray-400 text-sm mb-3'>
                        {project.location}
                      </p>
                      <p className='text-gray-600 dark:text-gray-400'>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
            href='/Feven_Tolosa_Resume.pdf'
            download='Feven_Tolosa_Resume.pdf'
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
