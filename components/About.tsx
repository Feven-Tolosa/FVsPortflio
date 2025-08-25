import Image from 'next/image'

// components/About.tsx
export default function About() {
  const aboutInfo = [
    { label: 'Name', value: 'Feven Tolosa', icon: '👩‍💻' },
    // { label: 'Date of birth', value: 'September 03, 2004', icon: '🎂' },
    { label: 'Address', value: 'Addis Ababa, Ethiopia', icon: '📍' },
    { label: 'Email', value: 'feventolosa14@gmail.com', icon: '✉️' },
    { label: 'Phone', value: '+251-939-733-939', icon: '📱' },
  ]

  return (
    <section
      id='about'
      className='py-20 bg-white dark:bg-gray-900 relative overflow-hidden'
    >
      {/* Background pattern */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mb-16'>
          <span className='text-purple-600 dark:text-purple-400 font-medium'>
            About Me
          </span>
          <h2 className='text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white'>
            Get to Know Me
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            I am a passionate full-stack developer with expertise in creating
            modern web applications
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300'>
              <img
                src='/images/bg_1.png'
                alt='Feven Tolosa'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white'>
              Who I Am
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
              I am a dedicated full-stack developer based in Ethiopia,
              specializing in building exceptional digital experiences. With a
              strong foundation in both front-end and back-end technologies, I
              create solutions that are both visually appealing and highly
              functional.
            </p>

            <p className='text-gray-600 dark:text-gray-400 mb-8'>
              My approach combines creative design with technical expertise to
              deliver user-friendly applications that meet both business goals
              and user needs. I am constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              {aboutInfo.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'
                >
                  <span className='text-2xl mr-3'>{item.icon}</span>
                  <div>
                    <span className='block font-medium text-gray-700 dark:text-gray-300'>
                      {item.label}
                    </span>
                    <span className='text-gray-600 dark:text-gray-400'>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href='#contact'
              className='inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/30'
            >
              Lets Connect
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
          </div>
        </div>
      </div>
    </section>
  )
}
