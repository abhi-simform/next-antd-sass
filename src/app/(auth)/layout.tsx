import type { Metadata } from 'next'
import Image from 'next/image'
import { ThemeProvider } from '@/context/ThemeContext'
import './auth.scss'

export const metadata: Metadata = {
  title: 'NextJS + Sass',
  description: 'NextJS, Ant Design and Sass boilerplate'
}

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider>
          <main className="auth">
            <aside className="aside" />
            <div className="content">
              <Image
                src="/images/logo.svg"
                className="logo"
                alt="simform logo"
                width={686}
                height={126}
              />
              <div className="form">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
