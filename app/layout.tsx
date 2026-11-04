import "./globals.css";
import { Inter } from 'next/font/google'
import { Navbar } from './components/dom/navBar'
import { Footer } from './components/dom/footer'
import React, { Suspense } from 'react';
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  metadataBase: new URL("https://www.onajobi.co"),
  title: {
    default: "Victoria Onajobi | Creative",
    template: "%s | Victoria Onajobi",
  },
  description:
    "Victoria Onajobi is a multidisciplinary designer. They are a creative with exceptional skills for building interactive products.",
  openGraph: {
    type: "website",
    siteName: "Victoria Onajobi",
    images: ["/og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}
export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body>      
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
