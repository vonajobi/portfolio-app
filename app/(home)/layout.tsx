"use client";
import React, {useState} from "react";
import { Loader } from "../components/dom/loader";



export default function HomeLayout({children}: {children: React.ReactNode}) {
  const [unmount, setUnmount] = useState(false);
  return (
    <>
    {!unmount && <Loader setUnmount={setUnmount} />}
      {children}
    </>
  );
}
