import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.className} flex flex-col min-h-screen`}> {/* Apply flex styling here */}
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
