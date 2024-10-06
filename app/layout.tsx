"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
 
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.className} flex flex-col min-h-screen`}> 
          <main className="flex-grow flex pt-20">
            <Navbar />
            {children} 
          </main>
            <Footer />
         
        </div>
      </body>
    </html>
  )
}
