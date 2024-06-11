"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Interactions from './interactions'
import { useEffect } from 'react'

// import projectData from '../projects/projects';
interface ProjectsProps {
    _id: number;
    title: string;
    description: string;
    image_1: string;
    image_2: string;
    image_3: string;

}
interface Props{
    products: ProjectsProps[]
}

const Projects = () => {
    const [products, setProducts] = useState<ProjectsProps[]>([])

    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../projects/projects');
      const data = await res.json();
      setProducts(data);
    };
  
    fetchData();
  }, []);
  

  return (
<div className=' w-screen flex h-screen items-center px-10'>
    <div className='w-screen flex flex-nowrap flex-row h-80 items-center gap-10 py-10 px-10 mx-auto overflow-x-scroll'>

    {/* <h1 className='text-2xl w-96'>PROJECTS</h1>*/}
    <h1 className='text-2xl w-96'>PROJECTS</h1> 
  
    {
        products.map((item) =>(
            <Interactions>
                <div className=' h-full shadow-2xl transition-shadow ease-out delay-100 /*border-r-4*/ hover:shadow-3xl hover:shadow-zinc-500 hover:ease-in'>
                    
                    <Link href = {{pathname: "/portfolio", query: {_id: item?._id} }}
                    key = {item._id}
                        > 
                        <div className='absolute w-full h-full '>
                        <img
                        src = {item?.image_1} 
                        alt = {item.title}
                        className=' w-full h-full object-cover'
                        />
                    </div>
{/*                    
                     <div className='absolute w-full h-full -translate-x-1 translate-y-1 '>                       
                        <img
                        src = {item?.image_2} 
                        alt = {item.title}
                        className=' object-cover w-full h-full'
                        />
                    </div>
                    <div className='absolute w-full h-full -translate-x-2 translate-y-2'>
                        <img
                        src = {item?.image_3} 
                        alt = {item.title}
                        className=' object-cover w-full h-full'
                    />
                    </div>     */}
                   
                    
                    <div className='absolute flex  bottom-0 h-24 bg-black/75 '>
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

