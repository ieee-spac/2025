import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Open_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/utils/theme-provider'

import '@/app/(home)/globals.css'

import { Toaster } from '@/components/shadcn/ui/sonner/sonner'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IEEE SPAC 2025',
  description:
    'Official Website of the IEEE Student Professional Awareness Conference 2025, hosted in Ottawa, Ontario.',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="dark scroll-pt-20 scroll-smooth md:scroll-pt-28"
      suppressHydrationWarning
    >
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
