import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
import Link from 'next/link'
import {Rubik_Glitch} from 'next/font/google'
import {Rubik_80s_Fade} from 'next/font/google'

const rubik = Rubik_Glitch({ weight: '400', subsets: ['latin'] })
const rubik80 = Rubik_80s_Fade({ weight: '400', subsets: ['latin'] })

export const HomepageOverlay = () => {
  // const router = useStore((s) => s.router)
  // console.log(useStore.getState())
  
  const link = '/projects/'

  return (
    <div className='absolute bottom-0 flex flex-row w-full h-2/5 sm:h-1/3 py-10 bg-white/5 items-center pointer-events-none'>
      <div className='flex flex-col gap-4 md:gap-46 sm:flex-row sm:justify-items-start justify-center h-full w-full content-center items-start px-10 backdrop-blur-sm'>
         <div className='text-base self-center font-light pointer-events-none top-10 text-white/70'>
          <h1 className={` uppercase inline text-3xl md:text-5xl text-white/60 tracking-widest`}>
            
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
              <span className='text-[#f2777a]'>.</span> 
              <span >{`#]`}</span> 
            
          </h1>

            <p className='text-md mt-1'> Hi, my name is Victoria <FaRegHandPeace className='inline' />. I&apos;m a tinkerer. I make cool things in <span className={` inline`}>2D</span> and <span className={` inline`}>3D</span>. Checkout my portfolio for more.</p>

          
        </div>

        <div className=' flex space-x-6 flex-row sm:mx-10 whitespace-nowrap sm:self-center pointer-events-none'>
            
           <Socials />
        </div> 

      </div>

    </div>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='text-sm font-light text-white/70 cursor-pointer transition-all md:justify-start pointer-events-auto'>
      <li className=' flex hover:text-white'>
        <a href='https://github.com/vonajobi'>GITHUB</a>
        <FiArrowUpRight/>
      </li>
      <li className='flex hover:text-white'>
        <a href='https://www.linkedin.com/in/victoria-onajobi'>LINKEDIN</a>
        <FiArrowUpRight/>
      </li>
      <li className='flex hover:text-white'>
        <a href='https://issuu.com/sceneusc/docs/hollywood_s_backyard_scene_magazine_issue_no._2_/6'>FEATURED</a>
        <FiArrowUpRight/>
      </li>
    </ul>
  )
}
