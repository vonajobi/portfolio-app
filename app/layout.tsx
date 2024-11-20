"use client";
import './globals.css';
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import Header from './components/dom/header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <Header/>
      <body>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <Navbar />
          <main className="flex-grow flex pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
