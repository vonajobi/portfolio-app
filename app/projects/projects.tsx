"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Interactions from './interactions'
import Image from 'next/image'

import projects from "../../public/data/projects.json";
import { useSearchParams } from "next/navigation"

export interface ProjectsProps {
    _id: number;
    title?: string;
    description: string;
    image_1?: string;
    video?: string;
    link: string;
    category: string;

}
type ProjectsComponentProps = {
  category?: string;
};
const Projects: React.FC<ProjectsComponentProps> = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get("category")
    const filteredProjects = category
    ? projects.filter(p => p.category === category)
    : projects
   

  return (
    <div className=' mt-0 md:mt-12'>
        <div className='absolute inset-0 
                        bg-[url("/assets/background_black.svg")] 
                        bg-no-repeat
                        bg-cover
                        opacity-30'></div>
        
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
                        text-neutral-400
                        '>
    
        {
            filteredProjects.map((item) =>(
            <Interactions  key = {item._id} >
                    <Link 
                        href = {item.link}
                        className=' hover:shadow-2xl 
                                    hover:shadow-zinc-500 
                                    transition-shadow
                                    px-2
                                    py-2
                                    rounded-lg
                                '>
                                    
                            <div className='grid grid-cols gap-2 aspect-4/3 '>
                                {item.type === "video" ? (
                                    <video src={item.media}
                                        className="object-cover rounded-lg"
                                        autoPlay
                                        loop
                                        playsInline
                                        muted
                                        preload="metadata"
                                    />
                                ) : 
                                <img
                                    src = {item.media} 
                                    alt = {item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className='object-cover rounded-lg '
                                />
                                }
                                <h1 className='text-md uppercase'>{item.title}</h1>
                                <p className='text-sm pb-2'>{item.description}</p>
                            </div>               
                    </Link>
            </Interactions>
            ))
        }
        </div>
    </div>
)}

export default Projects



