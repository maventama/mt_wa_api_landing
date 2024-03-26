import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - MT WA API',
    default: 'MT WA API - Integrasikan bisnis Anda dengan MT WA API.',
  },
  description:
    'Dengan MT WA API, Anda dapat mengirimkan pesan WhatsApp ke pelanggan Anda secara otomatis dan membangun chatbot yang dapat membantu pelanggan Anda dengan cepat dan efisien.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
