"use client";
import React from "react";
import PixelDitherCanvas from "./mobile/pixelAnimation";
import useIsDesktop from "../components/helpers/mediaQuery";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useIsDesktop()
  return (
    
    <>
      {!isDesktop && (
        <div className="inset-0 pointer-events-none ">
          <PixelDitherCanvas  />
         </div>
      )}
      {children}
    </>
  );
}
