import React from 'react'
import { Metadata } from 'next';
import {Caveat_Brush } from 'next/font/google'


export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: 'Child&apos;s Play Room'
}
const caveatBrush = Caveat_Brush({ weight: '400', subsets: ['latin'] })

const ChildScene = () => {
  const file_path = "/assets/projects/scene/";
  return (
    <div className='flex flex-col md:flex-row justify-center gap-2 pt-6'>
      <div className='flex w-full md:flex h-fit flex-col md:w-42.5'>
        <p className= { `${caveatBrush.className} text-4xl md:text-6xl font-bold text-fuchsia-300`}>Inner Child</p>
        <p className='h-full text-sm text-white/60 font-light'> Inside the inner mind is a 3D rendering collection of toys you would find inside a child's play room. Tools utilized include Photoshop, Fusion 360, and Adobe Dimension. </p>
      </div>
       <div className='w-full h-full grid grid-row gap-4 place-content-center md:w-2/3'>
        <img src={`${file_path}scene1.webp`} alt="rendering of a child's play room 1" />
        <img src={`${file_path}scene2.webp`} alt="rendering of a child's play room 2" />
        <img src={`${file_path}scene3.webp`} alt="rendering of a child's play room 3" />
      </div> 
    </div>
  )
}
export default ChildScene;
