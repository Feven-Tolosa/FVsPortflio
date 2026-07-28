import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

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
    'Full Stack Software Developer specializing in Next.js, React, TypeScript, Python, Django, React Native, Node.js, PostgreSQL, and modern web technologies. Explore my projects, technical skills, and professional experience.',

  applicationName: 'Feven Tolosa Portfolio',

  keywords: [
    'Feven Tolosa',
    'Mercy Feven',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'Django',
    'React Native',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Supabase',
    'Tailwind CSS',
    'JavaScript',
    'Portfolio',
    'Web Developer',
    'Mobile Developer',
  ],

  authors: [
    {
      name: 'Feven Tolosa',
      url: 'https://f-vs-portflio-zpwp.vercel.app',
    },
  ],

  creator: 'Feven Tolosa',
  publisher: 'Feven Tolosa',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f-vs-portflio-zpwp.vercel.app',
    siteName: 'Feven Tolosa Portfolio',
    title: 'Feven Tolosa | Full Stack Software Developer',
    description:
      'Explore the portfolio of Feven Tolosa, a Full Stack Software Developer passionate about building scalable web and mobile applications using modern technologies.',

    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Feven Tolosa Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Feven Tolosa | Full Stack Software Developer',
    description:
      'Portfolio showcasing projects, experience, and expertise in Full Stack Development.',
    images: ['/opengraph-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  category: 'technology',

  verification: {
    // google: 'your-google-search-console-code',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Video Background */}
        <div className='fixed inset-0 -z-10'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='h-full w-full object-cover '
          >
            <source src='/bgv.mp4' type='video/mp4' />
          </video>

          {/* overlay for readability */}
          <div className='absolute inset-0 bg-black/50' />
        </div>
        <Navbar />
        {children}
        <Footer />
        <Script id='chatling-config' strategy='beforeInteractive'>
          {`
    window.chtlConfig = {
      chatbotId: "5944467262"
    };
  `}
        </Script>

        {/* Chatling embed */}
        <Script
          id='chatling-script'
          src='https://chatling.ai/js/embed.js'
          strategy='afterInteractive'
        />
      </body>
    </html>
  )
}
