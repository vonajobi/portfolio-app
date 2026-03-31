"use client";
import React, {useState} from "react";
import PixelDitherCanvas from "./mobile/pixelAnimation";
import useIsDesktop from "../components/helpers/mediaQuery";
import { Loader } from "../components/dom/loader";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useIsDesktop()
  const [unmount, setUnmount] = useState(false);
  return (
    
    <>
    {!unmount && <Loader setUnmount={setUnmount} />}
      {!isDesktop && (
        <div className="inset-0 pointer-events-none ">
          <PixelDitherCanvas  />
         </div>
      )}
      {children}
    </>
  );
}
