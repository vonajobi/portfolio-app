"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Interactions from './interactions'
import {ProjectsProps}  from '@/app/projects/projectProps';

import projects from "../../public/data/projects.json";


const title = 'Victoria Onajobi | Creaive Developer'

const Projects = () => {
    // const [products, setProducts] = useState<ProjectsProps[]>(projects)

 
  return (
    <div className='mt-0 md:mt-12'>
    <div className='flex 
                    flex-wrap 
                    mb-16
                    mt-7
                    md:mx-4
                    justify-center
                    items-center 
                    text-left
                    gap-2
                    sm:gap-5
                    text-neutral-600
                    '>

    {/* <h1 className='text-2xl w-96'>PROJECTS</h1>  */}
  
    {
        projects.map((item) =>(
        <Interactions  key = {item._id}>
                <Link 
                    href = {item.link}
                    className=' hover:shadow-md 
                                hover:shadow-zinc-500 
                                transition-shadow
                                px-2
                                py-2
                                rounded-lg
                               '>
                                   
                        <div className='flex flex-col gap-2 text-black/60'>
                            <img
                                src = {item.image_1} 
                                alt = {item.title}
                                className='rounded-lg w-100 max-h-100'
                            />
                            <p className='text-md font-medium'>{item.title}</p>
                            <p className='text-xs pb-2'>{item.description}</p>
                        </div>               
                 </Link>
        </Interactions>
        ))
    }
    </div>
  </div>
)}

export default Projects



