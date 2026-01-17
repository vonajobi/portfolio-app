import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from './socials';



export const MobileHomepageOverlay = () => {



  return (
    

    <div className='relative
                    w-full
                    min-h-screen

                    flex
                    flex-col

                    py-10
                    bg-black
      '>
        {/* hero */}
        <section className="flex flex-col items-center shrink-0 py-10">
        {/* Role */}
        <div className='font-light
                        italic 
                        text-4xl
                        text-white/70
                        
                        leading-tight
                        self-start

                        mb-10
                        pl-5'>
              developer,<br/>
              designer,<br/>
              genius,
        </div>
        {/* Name */}
          <div className='uppercase
                          font-bold
                          text-center
                          text-[3.8rem]
                          text-white/60

                          tracking-widest
                          leading-none
                          mb-6'>
            <div>
              <span className='text-[#f2777a]'>V</span> 
              <span className='text-[#ffcc66]'>I</span> 
              <span className='text-[#99cc99]'>C</span> 
              <span className='text-[#66cccc]'>T</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#cc99cc]'>R</span> 
              <span className='text-[#f2777a]'>I</span> 
              <span className='text-[#6699cc]'>A</span>
            </div>

            {/* Face Accent */}
            <div className='text-3xl text-[#ffcc66] tracking-normal my-2'>{`>_<`}</div> 

            <div>
              <span className='text-[#f2777a]'>O</span> 
              <span className='text-[#ffcc66]'>n</span> 
              <span className='text-[#66cccc]'>a</span> 
              <span className='text-[#cc99cc]'>j</span> 
              <span className='text-[#6699cc]'>O</span> 
              <span className='text-[#f2777a]'>b</span> 
              <span className='text-[#99cc99]'>i.</span> 
            </div>    
          </div>

          {/* bio */} 
          <p className='max-w-xs text-sm text-white/80 leading-relaxed'> Hi, I&apos;m Victoria <FaRegHandPeace className='inline' />. I design cool things in 2D & 3D. Checkout my portfolio for more.
          </p> 
          </section>



    {/* needs work */}
          
      {/* CTA */}
      <section className="py-4">
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-full">
          View Featured Projects
        </button>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-6 space-y-6">

        {/* Example project cards */}
        <div className="flex flex-col gap-4">
          cards go here
        </div>

        <button className="mt-4 text-sm underline">View All Projects</button>
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


