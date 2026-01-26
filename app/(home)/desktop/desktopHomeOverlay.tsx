import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from '../../components/dom/socials';
import { useEffect, useState } from "react";
import { HomePageOverlay } from '../homePageOverlay';


export const DesktopHomepageOverlay = () => {
  return (
    

    <div className='relative
                    w-full

                    flex
                    justify-center
                    
                    py-6
                    bg-white/50
                    pointer-events-none
                    flex-row
                    h-1/2
                    '>
      <div className='flex flex-col
                      gap-8
          
                      items-center
                      backdrop-blur-sm

                      '>
          <HomePageOverlay/>
          <div className="flex flex-col gap-6">
            <Socials />
          </div> 
      </div>

    </div>
    
  )
}

   