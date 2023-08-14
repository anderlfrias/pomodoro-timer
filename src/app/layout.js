import Header from '@/components/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pomodoro Timer',
  description: 'A simple pomodoro timer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
