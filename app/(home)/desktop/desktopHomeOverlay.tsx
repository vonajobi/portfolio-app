import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from '../../components/dom/socials';
import { HomePageOverlay } from '../homePageOverlay';
import Projects from '@/app/projects/projects';


export const DesktopHomepageOverlay = () => {
  return (
    
    <div className='absolute z-10 bottom-0 h-1/3'>

    <div className='relative
                    w-screen

                    flex
                    justify-center
                    
                    py-6
                    bg-black/10
                    flex-col
                    '>
      {/* hero */}
      <section className='bg-amber-95'>
        <div className='flex flex-col
                        gap-8
                        min-h-[80vh]
                        items-center
                        backdrop-blur-sm
                        
                        '>
            <HomePageOverlay/>
        </div>
      </section>
      {/* SOCIAL / INFO */}
      <section  className=''>
          <div className="flex flex-col gap-6">
            <Socials />
          </div> 
      </section>

    </div>
    </div>

  )
}

   