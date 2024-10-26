"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Interactions from './interactions'
import {ProjectsProps}  from '@/app/projects/projectProps';

import projects from "../../public/data/projects.json";


const title = 'Victoria Onajobi | Creaive Developer'

const Projects = () => {
    const [products, setProducts] = useState<ProjectsProps[]>(projects)

 
  return (
    <div className=' w-screen flex items-center px-10'>
    <div className=' w-screen flex flex-nowrap flex-row h-[24rem] items-center gap-10 py-14 px-10 mx-auto overflow-x-scroll'>

    <h1 className='text-2xl w-96'>PROJECTS</h1> 
  
    {
        projects.map((item) =>(
        <Interactions  key = {item._id}>
                <div className=' rounded-3xl h-full shadow-2xl transition-shadow ease-out delay-100 hover:shadow-2xl hover:shadow-zinc-500 hover:ease-in'>
                <Link href = {item.link}>
                                   
                        <div className='rounded-3xl absolute w-full h-full'>
                            <img
                                src = {item.image_1} 
                                alt = {item.title}
                                className=' w-full h-full object-cover rounded-3xl '
                            />
                        </div>
                    
                    <div className=' rounded-b-3xl  absolute flex  bottom-0 h-24 bg-black/75 w-full '>
                        <div className= 'self-end py-4 px-8'>
                            <h1 className='text-white/75 text-md uppercase'>{item.title}</h1>
                            <p className='text-white/75 text-xs '>{item.description}</p>
                        </div>  
                    </div>

                 </Link>
                </div>
                </Interactions>
        ))
    }
    </div>
  </div>
)}

export default Projects



