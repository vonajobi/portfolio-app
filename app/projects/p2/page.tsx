import React, { useEffect, useState } from 'react';
import ImageGrid from '../../components/layout/imageGrid';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: 'Grow Lamp',
}

const Project2 = () => {
  const file_path = "/assets/projects/lamp/";
  const finalImages = [
    `${file_path}lamp_desk_low.png`,
    `${file_path}lamp_desk_high.png`,
    `${file_path}final_photo_2.jpg`,  
    `${file_path}final_photo_1.jpg`
  ];
  const processImages = [
    `${file_path}process_2.jpg`,
    `${file_path}IMG_5511.jpg`,
    `${file_path}IMG_5525.jpg`,
    `${file_path}IMG_5521.jpg`,
    `${file_path}process_3.jpg`,
  ];

  return (
    <div className='min-h-screen flex bg-[url(/assets/background_pink.png)] bg-cover'>
      <div className='  w-screen xl:w-2/3 mx-auto '>
        {/* Intro */}
        <section className=" h-auto mb-24 relative md:mb-38">
          <img src={`${file_path}lamp3.png`}/>
          <h1 className='absolute text-7xl font-bold text-white bottom md:bottom-10 left-4 md:left-28'>Plant Grow Lamp</h1>
        </section>
        {/* Concept */}
        <section className=" py-12 px-8 text-[#36454F] md:px-24">
          <h1 className="text-2xl md:text-3xl">Concept</h1>
          <p className='text-md md:text-lg pt-3'>The plant grow lamp adjusts light temperature and brightness based on the amount of ambient sunlight. 
            Designed for maintaining ample light in a sunlight deficient room, the Plant Grow lamp combines smart technology with simple design in hopes of stimulating plant growth.
          </p>
          <ul className="text-md md:text-lg">
              <li>
                <span className='font-bold'>Tools:</span> Fusion 360, Blender
              </li>
              <li>
                <span className='font-bold'>Materials:</span> White Oak, Addressable LED, Light Diffusers, 
              </li>
              <li>
              <span className='font-bold'>Components:</span> 1918 UV Sensor GUVA-S12SD, WS21818B LED, Potentiometer 
              </li>
          </ul>
          <span className='mt-10 flex md:flex-row gap-5 justify-center'>
              <Image src={`${file_path}plant.svg`} alt='plant vector' width={100} height={100}/>
              <Image src={`${file_path}lightbulb.svg`} alt='lightbulb vector ' width={100} height={100}/>
          </span>
        </section>
        {/* Process */}
        <section className=" py-12 px-8 text-[#36454F] md:px-20 " >
          <div className='relative'>
            <img src={`${file_path}lamp4_frame.png`} alt='Plant Grow Lamp with concept sketches'/>
            <div className=' w-full lg:absolute lg:bottom-0  lg:right-20  md:text-right md:w-3/4 my-10 '>
              <h2 className='text-xl md:text-2xl font-semibold'>Design Process</h2>
              <p className=' text-lg md:text-md'>
                Initial iterations used a steel ball and socket joint to give the user full control and a sophisticated wood joinery technique to transition from wood to metal. 
                The final design uses a modern design features an oak wood finish, addressable LEDs, two separate light diffusers, and an adjustable potentiometer. 
                the top haf of the 
              </p>
            </div>
          </div>
        <ImageGrid images={processImages} /> 
        </section>
        <section className=" py-12 px-8 md:px-24">
            <Image src={`${file_path}cad.svg`} alt='cad drawings of lamp' width={1000} height={1000} />
            <ImageGrid images={finalImages} />
        </section>
        </div>
    </div>    
  )
}

export default Project2

