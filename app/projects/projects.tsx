"use client"
import {useState} from 'react'
import Link from 'next/link'
import Interactions from './interactions'
import {ProjectsProps}  from '@/app/projects/projectProps';
import projects from "../../public/data/projects.json";
import CardStack from './cardStack';


const title = 'Victoria Onajobi | Creative Developer'

const Projects = () => {
    const [products, setProducts] = useState<ProjectsProps[]>(projects)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const grouped = products.reduce((acc, project) => {
        const key = project.category || "Other"
        if (!acc[key]) acc[key] = []
        acc[key].push(project)
        return acc
    }, {} as Record<string, ProjectsProps[]>)
 
  return (
    <div className='relative h-screen bg-amber-700'>
        <div className='absolute  inset-0 
                        bg-[url("/assets/background_black.svg")] 
                        bg-no-repeat
                        bg-cover
                        opacity-30'
                        >
        </div>
        
        <div className=' relative
                        flex 
                        flex-col
                        justify-center
                        items-center
                        bg-red-500
                        w-screen
                        h-screen
                        overflow visible 
                        mx-auto

                        text-neutral-400
                        '>
                        {Object.entries(grouped).map(([category, items,]) => (
                            <CardStack
                                key={category}
                                category={category}
                                items={items}
                                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                                isOpen={selectedCategory === category}
                            />
                        ))}
        </div>        
     </div>
     
)}

export default Projects



