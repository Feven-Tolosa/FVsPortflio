import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://f-vs-portflio-zpwp.vercel.app'),
  title: {
    default: 'Feven Tolosa | Full Stack Software Developer',
    template: '%s | Feven Tolosa',
  },
  description:
    'Full Stack Software Developer specializing in Next.js, React, TypeScript, Node.js, and modern web technologies.',
  keywords: [
    'Feven Tolosa',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Feven Tolosa' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f-vs-portflio-zpwp.vercel.app',
    title: 'Feven Tolosa | Full Stack Software Developer',
    description:
      'Portfolio showcasing projects, experience, and expertise in Full Stack Development.',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feven Tolosa | Full Stack Software Developer',
    description:
      'Portfolio showcasing projects, experience, and expertise in Full Stack Development.',
    images: ['/opengraph-image.png'],
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang='en' className='dark' suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className='fixed inset-0 -z-10 bg-grid-pattern opacity-30' />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}
