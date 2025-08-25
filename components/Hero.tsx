export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-16'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40'>
        <div className='text-center'>
          <div className='animate-fade-in'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Hello, I am{' '}
              <span className='text-teal-600 dark:text-teal-400'>
                Feven Tolosa
              </span>
            </h1>
            <h2 className='text-xl md:text-3xl mb-8 text-gray-600 dark:text-gray-400'>
              A Full-Stack Web Developer
            </h2>
            <p className='text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700 dark:text-gray-300'>
              I create beautiful, functional websites and applications with
              modern technologies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#contact'
                className='bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors font-medium'
              >
                Hire Me
              </a>
              <a
                href='#projects'
                className='border border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg transition-colors font-medium'
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
