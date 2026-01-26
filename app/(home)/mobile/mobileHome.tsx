import {FaRegHandPeace} from 'react-icons/fa'
import { Socials } from '../../components/dom/socials';



export const MobileHomepageOverlay = () => {

  return ( 
    
    <div className="relative
                    w-full
                    min-h-screen

                    flex
                    flex-col

                    py-10
                    
                    ">
        {/* <div className="absolute inset-0
                      bg-[url('/assets/pixel.svg')]
                      bg-size-[1100px_auto]
                      bg-no-repeat
                      bg-bottom
                      -z-10
                      -m-12
                      -mb-12
                      bg-blend-
                      "> 
                      
        </div> */}
        {/* hero */}
        <section className="flex 
                            flex-col 

                            items-center 
                            shrink-0 
                            py-10
                            ">
          {/* bg */}
       
        {/* bg-[size:20px_20px]
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)]  */}

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
          <div className='uppercase
                          font-bold
                          text-center
                          text-[3.8rem]
                          font-mono
                          tracking-widest
                          leading-none
                          mb-6
                          
                          
                          '>
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
          {/* needs some work */}
          <p className='max-w-xs text-sm text-black/60 leading-relaxed'> Hi, I&apos;m Victoria <FaRegHandPeace className='inline' />. I prototype future objects, systems, and interactions.. Checkout what I&apos;m building.
          </p> 
          </section>



    {/* needs work */}
          
      {/* CTA */}
      {/* <section className="py-4">
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-full">
          View Featured Projects
        </button>
      </section> */}

      {/* PROJECTS PREVIEW */}
      {/* <section className="py-6 space-y-6"> */}

        {/* Example project cards */}
        {/* <div className="flex flex-col gap-4">
          cards go here
        </div>

        <button className="mt-4 text-sm underline">View All Projects</button>
      </section> */}

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


