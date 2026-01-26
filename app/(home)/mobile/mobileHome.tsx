import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from '../../components/dom/socials'
import { HomePageOverlay } from '../homePageOverlay'
import PixelDitherCanvas from './pixelAnimation'



export const MobileHomepageOverlay = () => {

  return ( 
    
    <div className="relative
                    w-full
                    min-h-screen

                    flex
                    flex-col

                    py-10
                    
                    ">
        {/* hero */}
        <section className="flex 
                            flex-col 

                            items-center 
                            shrink-0 
                            py-10
                            ">
          {/* bg */}
          <div className="inset-0 pointer-events-none ">
                    <PixelDitherCanvas  />
          </div>

        {/* Role */}
        <div className='font-light
                        
                        text-4xl
                        text-black/60
                        leading-tight
                        self-start

                        mb-2
                        pl-4'>
              developer,<br/>
              designer,<br/>
              genius,
        </div>
        {/* Name */}
          <HomePageOverlay/>
          </section>

      {/* SOCIAL / INFO */}
      <section className="mt-auto py-6 text-sm space-y-2">
        <div>Connect with me</div>
        <div className="flex row gap-6">
          <Socials />
        </div>
      </section>

      </div>

    
  )
}


