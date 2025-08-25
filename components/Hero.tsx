// components/Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16'
    >
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-950 z-0'></div>

      {/* Animated shapes */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
      <div className='absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      <div className='absolute bottom-40 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>

      <div className='container mx-auto px-6 relative z-10'>
        <div
          className={`flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <div className='mb-6'>
              <span className='text-purple-600 dark:text-purple-400 font-medium text-lg'>
                Hello, I am
              </span>
              <h1 className='text-5xl md:text-7xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400'>
                Feven Tolosa
              </h1>
              <h2 className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6'>
                Full-Stack{' '}
                <span className='text-purple-600 dark:text-purple-400'>
                  Web Developer
                </span>
              </h2>
              <p className='text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8'>
                I create beautiful, functional websites and applications with
                modern technologies. Lets bring your ideas to life!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='#projects'
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/30 flex items-center justify-center'
              >
                View My Work
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
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </a>
              <a
                href='#contact'
                className='border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center'
              >
                Contact Me
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
                    d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative'>
              <div className='w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl'>
                <Image
                  src='/images/bg_1.png'
                  alt='Feven Tolosa'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg animate-bounce'>
                React Developer
              </div>
              <div className='absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg animate-bounce animation-delay-2000'>
                Next.js Expert
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <div className='flex flex-col items-center'>
          <span className='text-gray-600 dark:text-gray-400 text-sm mb-2'>
            Scroll down
          </span>
          <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
