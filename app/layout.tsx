"use client";
import './globals.css';
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import Header from './components/dom/header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {

  return (
    <html lang="en">
      <Header title={title}/>
      <body>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <Navbar />
          <main className="flex-grow flex pt-20">
            {React.cloneElement(children as React.ReactElement, { title })}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
