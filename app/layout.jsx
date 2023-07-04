'use client'

import { Bad_Script } from 'next/font/google'
import '../styles/globals.css'

const badScript = Bad_Script({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {  
  const { pathname } = window.location

  return (
    <html className = { badScript.className }>
      <head>
        <title>Contento - All that sells</title>
        <link rel = 'icon' href = '/mine.png' />
      </head>
      <body className = 'mx-auto w-1/2 pt-24'>
        <img src = '/mine.png' alt = 'avatar' />
        <h2>Subhrakanti Dasgupta</h2>
        <nav className = 'flex gap-6'>
          <a className = { pathname.split === '/' ? 'text-black' : '' } href = '/'>Me</a>
          <a className = { pathname.split('/')[1] === 'content' ? 'text-black' : '' } href = '/content'>Content</a>
          <a className = { pathname === '/posters' ? 'text-black' : '' } href = '/posters'>Posters</a>
        </nav>
        <main className = 'border-t border-gray-300 mt-12 pt-12'>
          { children }
        </main>
      </body>
    </html>
  )
}