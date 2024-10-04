import React, { useEffect, useState } from 'react';
import {getProject} from '../../components/helpers/async';
import { ProjectsProps } from '@/app/projects/projectProps';
import ImageGrid from '../../components/layout/imageGrid';



const Project2 = ({ project }: { project: ProjectsProps }) => {
  const file_path = "/assets/projects/lamp/";

  return (
    <div className=' overflow-y-scroll gap-5 flex flex-col  content-start items-center w-screen h-screen box-border bg-[url(/assets/background_pink.png)] bg-cover'>
      <div className='relative w-2/3 min-h-[65%] content-start bg-gray-50'>
        <img src={`${file_path}lamp3.png`} alt={'rendering'} className='h-full w-full object-cover'/>
        {/* fix later */}
        <h1 className=' text-6xl font-bold absolute left-0 bottom-10 px-10 text-white'>{"Plant Grow Lamp"}</h1>
      </div >
    <div className='w-2/3 relative space-y-10'>

      <div className='  min-h-[20%] content-center text-[#36454F] px-4 py-5'>
        <h1>Concept</h1>
        <p className='text-md pt-3'>The plant grow lamp adjusts light temperature and brightness based on the amount of ambient sunlight. 
          Designed for maintaining ample light in a sunlight deficient room, the Plant Grow lamp combines smart technology with simple design in hopes of stimulating plant growth.
        </p>
         <br/>
          <ul>
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
          <br/><br/>
          <span className='flex flex-row gap-5 justify-center items-center box-border'>
            <img src='/assets/projects/lamp/plant.svg' alt='plant vector' className=' w-20'/>
            <img src='/assets/projects/lamp/lightbulb.svg' alt='lightbulb vector' className=' w-20'/>
          </span>
        
      </div>

      <div className='relative h-fit content-center bg-yellow-100 text-[#36454F]'>
        <img src={`${file_path}lamp4_frame.png`} alt='Plant Grow Lamp with concept sketches'/>
        <div className='absolute bottom-10 px-10 text-right  text-[#36454F]' >
          <h2 className='text-2xl font-semibold'>Design Process</h2>
          <p className='text-sm'>
            Initial iterations used a steel ball and socket joint to give the user full control and a sophisticated wood joinery technique to transition from wood to metal. 
            The final design uses a modern design features an oak wood finish, addressable LEDs, two separate light diffusers, and an adjustable potentiometer. 
            the top haf of the 
          </p>
        </div>
      </div>
        <div className='flex justify-center'>
          <img src={`${file_path}cad.svg`} alt='cad drawings of lamp' width={1000} />
        </div>
      <div className='grid grid-cols-2 gap-2'>
        <img className='h-80' src={`${file_path}lamp_desk_low.png`} alt='rendering of room with desk, lamp, chairs'/>
        <img className="h-80"src={`${file_path}lamp_desk_high.png`} alt='rendering of room with desk,lamp,chairs'/>
        <img src={`${file_path}final_photo_2.jpg`} alt='rendering of room with desk,lamp,chairs'/>
        <img src={`${file_path}final_photo_1.jpg`} alt='rendering of room with desk,lamp,chairs'/>

      </div>
    </div>
 
  </div>
    
  )
}

export default Project2

