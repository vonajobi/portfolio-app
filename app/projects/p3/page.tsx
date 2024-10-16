import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: 'Child&apos;s Play Room'
}

const ChildScene = () => {
  const file_path = "/assets/projects/scene/";
  return (
    <div className='flex  justify-center '>
       <div className='w-2/3 grid grid-row gap-4 place-content-center px-6 py-6'>
        <img src={`${file_path}scene1.png`} alt="rendering of a child's play room 1" />
        <img src={`${file_path}scene2.png`} alt="rendering of a child's play room 2" />
        <img src={`${file_path}scene3.jpg`} alt="rendering of a child's play room 3" />
      </div> 
    </div>
  )
}
export default ChildScene;
