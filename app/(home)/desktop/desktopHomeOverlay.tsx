import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from '../../components/dom/socials';
import { useEffect, useState } from "react";


export const DesktopHomepageOverlay = () => {
  return (
    

    <div className='absolute
                    w-full

                    z-2

                    flex
                    flex-row
                    items-center
                    
                    bg-white/5
                    pointer-events-none
                    
                    h-2/5
                    bottom-0
                    '>
      <div className='flex flex-col
                      
                      py-8
                      items-center
                      w-full
                      backdrop-blur-sm

                      '>
          <div className='uppercase
                          font-bold
                          text-center
                          text-[3.8rem]
                          font-mono
                          tracking-widest
                          leading-none
                                            
                          '>
            <div>
              <span className='text-[#7b7677]'>{`[#`}</span> 
              <span className='text-[#f2777a]'>V</span> 
              <span className='text-[#ffcc66]'>I</span> 
              <span className='text-[#99cc99]'>C</span> 
              <span className='text-[#66cccc]'>T</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#cc99cc]'>R</span> 
              <span className='text-[#f2777a]'>I</span> 
              <span className='text-[#6699cc]'>A</span>
            

            <span className='text-3xl text-[#ffcc66] tracking-normal '>{`>_<`}</span> 

            
              <span className='text-[#f2777a]'>O</span> 
              <span className='text-[#ffcc66]'>n</span> 
              <span className='text-[#66cccc]'>a</span> 
              <span className='text-[#cc99cc]'>j</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#f2777a]'>b</span> 
              <span className='text-[#99cc99]'>i.</span> 
              <span className='text-[#7b7677]'>{`#]`}</span> 
            </div>    
          </div>

          <p className='text-sm text-white/60 leading-relaxed'> Hi, I&apos;m Victoria <FaRegHandPeace className='inline' />. I prototype future objects, systems, and interactions.. Checkout what I&apos;m building.
          </p> 

          <div className="absolute start flex flex-col gap-6 bottom-0">
            <Socials />
          </div> 
      </div>

    </div>
    
  )
}

   