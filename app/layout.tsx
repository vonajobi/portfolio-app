"use client";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import Header from './components/dom/header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body>
        <Header/>
        <div className= {inter.className} >
          <Navbar />
          <div className="bg-black flex flex-col min-h-screen">
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
