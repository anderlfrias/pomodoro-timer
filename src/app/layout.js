import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pomodoro Timer',
  description: 'A simple pomodoro timer'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <div className='min-h-[calc(100vh-56px)]'>
          <div className='container mx-auto p-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
