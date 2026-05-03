"use client";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import Header from './components/dom/header';
import React, { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body>
        <Header/>
      
        <div className= {inter.className} >
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <div className=" flex 
                          flex-col 
                          min-h-screen
                          
                          bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
                          bg-size-[10px_10px]
                        bg-[#1e1e1e]">
            <main className="flex grow
                            pt-14
                            px-4

                            lg:pt-20
                            lg:px-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
