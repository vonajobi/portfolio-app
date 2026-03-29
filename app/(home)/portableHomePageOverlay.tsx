import {FaRegHandPeace} from 'react-icons/fa'

export const HomePageOverlay = ()=>{
    return(
        <>
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

         
          <p className='max-w-xs text-sm text-white/70 leading-relaxed'> Hi, I&apos;m Victoria <FaRegHandPeace className='inline' />. I prototype future objects, systems, and interactions.. Checkout what I&apos;m building.
          </p> 
        </>
    )
}
