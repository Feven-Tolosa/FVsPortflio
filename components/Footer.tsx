// components/Footer.tsx
export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-6 text-center'>
        <p className='text-gray-400'>
          © {new Date().getFullYear()} Feven Tolosa. All rights reserved.
        </p>
        <p className='text-gray-500 text-sm mt-2'>
          Made with ❤️ using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
