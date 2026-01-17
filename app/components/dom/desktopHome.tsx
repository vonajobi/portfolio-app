import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from './socials';
import { useEffect, useState } from "react";


export const DesktopHomepageOverlay = () => {
  // const router = useStore((s) => s.router)
  // console.log(useState)


  return (
    

    <div className='relative
                    w-full

                    flex
                    flex-col
                    items-center

                    py-6
                    bg-white/50
                    pointer-events-none

                    sm:absolute
                    sm:bottom-0
                    sm:flex-row
                    sm:h-1/3
                    sm:py-10'>
      <div className='flex flex-col
                      gap-6
                      px-4
                      items-center
                      backdrop-blur-sm

                      sm:flex-row
                      sm:items-start
                      sm:px-10
                      md:gap-16'>
         <div className='text-base self-center font-light pointer-events-none top-10 text-white/70'>
          <h1 className='uppercase
                        text-2xl
                        tracking-widest
                        text-white/60

                        sm:text-3xl
                        md:text-5xl'>
            
              <span >{`[#`}</span> 
              <span className='text-[#f2777a]'>V</span> 
              <span className='text-[#ffcc66]'>I</span> 
              <span className='text-[#99cc99]'>C</span> 
              <span className='text-[#66cccc]'>T</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#cc99cc]'>R</span> 
              <span className='text-[#f2777a]'>I</span> 
              <span className='text-[#6699cc]'>A</span> 
              <span className='tracking-normal text-[#ffcc66]'>{`>_<`}</span> 
              <span className='text-[#f2777a]'>O</span> 
              <span className='text-[#ffcc66]'>n</span> 
              <span className='text-[#66cccc]'>a</span> 
              <span className='text-[#cc99cc]'>j</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#f2777a]'>b</span> 
              <span className='text-[#99cc99]'>i</span> 
              <span >{`#]`}</span> 
            
          </h1>

            <p className='text-md mt-1'> Hi, my name is Victoria <FaRegHandPeace className='inline' />. I&apos;m a designer & tinkerer. I design cool things in <span className={` inline`}>2D</span> and <span className={` inline`}>3D</span>. Checkout my portfolio for more.</p>

          
        </div>

        <div className=' flex space-x-6 flex-row sm:mx-10 whitespace-nowrap sm:self-center pointer-events-none'>
            
           <Socials />
        </div> 

      </div>

    </div>
    
  )
}

   