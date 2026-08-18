'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Download,
  Briefcase,
  GraduationCap,
  Code,
  MapPin,
} from 'lucide-react'

interface ResumeProps {
  isStandalone?: boolean
}

export default function Resume({ isStandalone = false }: ResumeProps) {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Information Network Security Agency',
      period: 'Jul 2025 - Oct 2025',
      description: 'Working on security-focused web applications and systems.',
      location: 'Ethiopia',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Faulcon Enterprise LLC',
      period: 'Jul 2025 - Nov 2025',
      description:
        'Reviewed and optimized an existing codebase, implementing frontend improvements using Next.js & Tailwind CSS for enhanced UI/UX. Supported backend development, integrating APIs with Node.js & MySQL and debugging performance-critical issues.',
      location: 'USA',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Debo Engineering',
      period: 'Dec 2024 - Present',
      description:
        'Developed full-stack web apps using Next.js, React, Node.js, Express, and MySQL. Built responsive UIs with React & Next.js and integrated RESTful APIs with Node.js/Express. Designed and optimized MySQL databases for efficient data handling.',
      location: 'Ethiopia',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Evangeli Networks',
      period: 'Apr 2024 - Oct 2024',
      description:
        'Built and enhanced full-stack applications using React for the front end. Integrated RESTful APIs and managed state efficiently to ensure smooth data flow and real-time updates across the application.',
      location: 'Remote USA',
    },
  ]

  const projects = [
    {
      title: 'Furniture E-commerce Platform',
      company: 'Information Network Security Administration',
      period: 'Aug 2025 - Present',
      description:
        'Developed a furniture e-commerce platform using Next.js, Node.js and MySQL. Implemented secure user authentication with Firebase and Google login, including bot protection using reCAPTCHA. Integrated Stripe payment processing with fraud detection and data encryption.',
      location: 'Addis Ababa',
    },
    {
      title: 'Photo Studio Application',
      company: 'Debo Engineering',
      period: 'Dec 2024 - Jan 2025',
      description:
        'Designed and developed a full-stack Photo Studio Application using React.js and MySQL. Implemented features such as image uploads, user authentication, and gallery management.',
      location: 'Remote Jimma',
    },
  ]

  const education = [
    {
      degree: "Bachelor's degree",
      institution: 'Jimma University',
      period: '2022-2027',
      description: "Undergraduate bachelor's degree program.",
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
      className={`section-padding ${isStandalone ? 'min-h-screen pt-28' : ''}`}
    >
      <div className='container mx-auto px-6'>
        {isStandalone && (
          <div className='mb-8'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-purple-500 font-medium transition-colors'
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        )}

        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='tag-pill px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4'>
            My Resume
          </span>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Experience & <span className='gradient-text'>Education</span>
          </h2>
        </motion.div>

        {/* Skills */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-2xl font-semibold mb-8 flex items-center gap-3'>
            <span className='w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center'>
              <Code size={18} className='text-white' />
            </span>
            Technical Skills
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className='glass-card rounded-xl p-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className='flex justify-between mb-2'>
                  <span className='font-medium text-sm text-[var(--text-primary)]'>
                    {skill.name}
                  </span>
                  <span className='text-xs text-[var(--text-tertiary)]'>
                    {skill.level}%
                  </span>
                </div>
                <div className='w-full bg-[var(--input-bg)] rounded-full h-1.5'>
                  <div
                    className='h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-semibold mb-8 flex items-center gap-3'>
              <span className='w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center'>
                <Briefcase size={18} className='text-white' />
              </span>
              Work Experience
            </h3>
            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className='glass-card rounded-2xl p-6 relative'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className='absolute top-6 left-0 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full' />
                  <div className='pl-4'>
                    <h4 className='font-semibold text-lg text-[var(--text-primary)]'>
                      {exp.title}
                    </h4>
                    <p className='text-purple-500 text-sm font-medium mb-1'>
                      {exp.company}
                    </p>
                    <div className='flex items-center gap-3 text-xs text-[var(--text-tertiary)] mb-3'>
                      <span>{exp.period}</span>
                      <span className='flex items-center gap-1'>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                    <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mb-12'
            >
              <h3 className='text-2xl font-semibold mb-8 flex items-center gap-3'>
                <span className='w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center'>
                  <GraduationCap size={18} className='text-white' />
                </span>
                Education
              </h3>
              <div className='space-y-6'>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className='glass-card rounded-2xl p-6 relative'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className='absolute top-6 left-0 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full' />
                    <div className='pl-4'>
                      <h4 className='font-semibold text-lg text-[var(--text-primary)]'>
                        {edu.degree}
                      </h4>
                      <p className='text-purple-500 text-sm font-medium mb-1'>
                        {edu.institution} &bull; {edu.period}
                      </p>
                      <p className='text-[var(--text-secondary)] text-sm'>
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className='text-2xl font-semibold mb-8 flex items-center gap-3'>
                <span className='w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center'>
                  <Code size={18} className='text-white' />
                </span>
                Key Projects
              </h3>
              <div className='space-y-6'>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className='glass-card rounded-2xl p-6 relative'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className='absolute top-6 left-0 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full' />
                    <div className='pl-4'>
                      <h4 className='font-semibold text-lg text-[var(--text-primary)]'>
                        {project.title}
                      </h4>
                      <p className='text-purple-500 text-sm font-medium mb-1'>
                        {project.company}
                      </p>
                      <div className='flex items-center gap-3 text-xs text-[var(--text-tertiary)] mb-3'>
                        <span>{project.period}</span>
                        <span className='flex items-center gap-1'>
                          <MapPin size={12} />
                          {project.location}
                        </span>
                      </div>
                      <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href='/Feven_Tolosa_Resume.pdf'
            download='Feven_Tolosa_Resume.pdf'
            className='inline-flex items-center gap-2 gradient-btn px-8 py-3.5 rounded-xl font-medium'
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
