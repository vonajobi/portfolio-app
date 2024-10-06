import { FiArrowUpRight } from 'react-icons/fi'
import {FaRegHandPeace} from 'react-icons/fa'
// import useStore from '../helpers/helper'
import Link from 'next/link'

export const HomepageOverlay = () => {
  // const router = useStore((s) => s.router)
  // console.log(useStore.getState())
  
  const link = '/projects/'

  return (
    <div className='absolute bottom-0 flex flex-row w-full h-2/5  bg-white/5 items-center pointer-events-none'>
      <div className='flex flex-row space-x-10 justify-center h-full w-full content-center
       backdrop-blur-sm py-10 md:py-20 md:px-36  bg-black/25 '>
        {/* <div className='bg-black/50 w-full h-5/6' />  */}
        <div className='text-base md:self-center font-light pointer-events-none md:text-x text-white/70 whitespace-nowrap top-10'>
          <h1 className='inline text-3xl uppercase md:text-5xl text-white/60'>
            Victoria Onajobi.
          </h1>
          <br/>
            <p className='text-sm'> Hi, my name is Victoria <FaRegHandPeace className='inline' />. I&apos;m a tinkerer. I make cool things in 2D and 3D.</p>
          <p className='text-sm'> Checkout my portfolio for more.</p>

          
        </div>

        <div className=' flex space-x-6 flex-row whitespace-nowrap  md:self-center md:items-startpointer-events-none'>
            <ul>
              <li>
                <Link href = {`${link}p1`}
                className='text-sm font-light uppercase text-white/70 self-end pointer-events-auto transition-all hover-effect'
                >
                Crushies
                </Link>
              </li>
              <li>
                <Link href = {`${link}p4`}
                className='text-sm font-light uppercase text-white/70 self-end pointer-events-auto transition-all hover-effect'
                >
                H Blocks
                </Link>
              </li>
              <li>
                <Link href = {`${link}p5`}
                className='text-sm font-light uppercase text-white/70 self-end pointer-events-auto transition-all hover-effect'
                >
                Intuitive Paper
                </Link>
              </li>
            </ul>
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
        <a href='https://issuu.com/sceneusc/docs/hollywood_s_backyard_scene_magazine_issue_no._2_'>FEATURED</a>
        <FiArrowUpRight/>
      </li>
    </ul>
  )
}
