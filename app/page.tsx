// app/page.tsx
import About from '@/components/About'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <About />
    </main>
  )
}
