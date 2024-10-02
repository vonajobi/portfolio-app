import React from 'react'
import { ProjectsProps } from '../projectProps'
import { Permanent_Marker } from 'next/font/google';
import { Gloria_Hallelujah } from 'next/font/google';

const h1 = Permanent_Marker({ subsets: ['latin'], weight: '400' });
const gloriaHallelujah = Gloria_Hallelujah({ subsets: ['latin'], weight: '400' });

 const Project_1 = ({ project }: { project: ProjectsProps }) => {
  const file_path = "/assets/projects/blind_box/";
  const file_path_2 = "/assets/projects/blind_box/drawings/";
  const crushie_red = '#a61e1e';
  return (
    <div className='flex flex-col items-center w-screen h-screen overflow-y-scroll box-border'>

      <div className=' flex flex-col space-y-4 w-2/3'>
        <div className='relative w-full'>
          <span className={`${h1.className} text-9xl absolute top-1/2 left-1/2 transform -translate-x-60 -translate-y-32 text-[${crushie_red}]`}>
            Crushies
          </span>
          <span className= {`${gloriaHallelujah.className} text-4xl absolute top-1/2 left-1/2`} style={{transform: 'translate(-50%, 5rem) rotate(-6deg)', color: 'black'}}>
            a blind box series
          </span>
          <img src={`${file_path}6.png`} alt={'Crushies a Blind Box Series'} className='w-full h-auto'/>
        </div>
        
        <img src={`${file_path}IMG_7344.png`}  />

        <div className='relative w-full'>
          <span className={`${h1.className} text-7xl absolute top-1/2 left-1/3 transform -translate-x-70 -translate-y-10`}>
            Design Process
          </span>
          <img src={`${file_path}10.png`} alt={'Crushies a Blind Box Series'} className='w-full h-auto'/>
        </div>

        <div>
          <div className='relative'>
            <span className= {`${gloriaHallelujah.className} text-4xl absolute top-10 left-1/4`} style={{transform: 'translate(-60%, 5rem)', color: 'black'}}>
            Ideation
            </span>
            <img className='' src={`${file_path}ideation.png`}/>
          </div>
          <div className='relative'>
          <span className= {`${gloriaHallelujah.className} text-4xl absolute top-8 left-1/3`} style={{transform: 'translate(-70%, 1rem)', color: 'black'}}>
            Design Process
          </span>
            <img className='' src={`${file_path}12.png`}/>
          </div>
          <div className='relative'>
          <span className= {`${gloriaHallelujah.className} text-4xl absolute top-0 left-1/3`} style={{transform: 'translate(-70%, 6rem)', color: 'black'}}>
            Color Palate
          </span>
          <span className= {`${gloriaHallelujah.className} text-4xl absolute top-0 left-2/3`} style={{transform: 'translate(-50%, 6rem)', color: 'black'}}>
            Typography          
          </span>
            <img className='' src={`${file_path}13.png`}/>
          </div>
        </div>
        <img className='' src={`${file_path}crushie_2.png`}/>

        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}crushie_base.png`}/>
          <img className='' src={`${file_path}crushie_1.png`}/>
          <img className='' src={`${file_path}crushie_3.png`}/>
        </div>
        <img className='' src={`${file_path}devil_3.png`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}down_bad_base.png`}/>
          <img className='' src={`${file_path}devil_2.png`}/>
          <img className='' src={`${file_path}devil_4.png`}/>
          <img className='' src={`${file_path}devil_5.png`}/>
          <img className='' src={`${file_path}downBad.png`}/>
        </div>
        <img className='' src={`${file_path}gas_light_3.png`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}gas_light_base.jpg`}/>
          <img className='' src={`${file_path}gas_light_1.png`}/>
          <img className='' src={`${file_path}gas_light_2.png`}/>
          <img className='' src={`${file_path}gas_light_5.gif`}/>
        </div>
        <img className='' src={`${file_path}clouds_4.png`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}head_clouds_base.png`}/>
          <img className='' src={`${file_path}clouds_3.png`}/>
          <img className='' src={`${file_path}clouds_2.png`}/>
        </div>
        <img className='' src={`${file_path}love_sick_5.png`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}love_sick_base.png`}/>
          <img className='' src={`${file_path}love_sick_3.png`}/>
          <img className='' src={`${file_path}IMG_9911.jpg`}/>
          <img className='' src={`${file_path}love_sick_2.png`}/>
        </div>
        <img className='' src={`${file_path}ghosted_1.png`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path_2}ghosted_base.png`}/>
          <img className='' src={`${file_path}ghosted_2.png`}/>
          <img className='' src={`${file_path}ghosted_3.png`}/>
        </div>
        <img className='' src={`${file_path}final_design.svg`}/>
        <div className='grid grid-cols-2 '>
          <img className='' src={`${file_path}packaging_1.svg`}/>
          <img className='' src={`${file_path}packaging_2.png`}/>
          <img className='' src={`${file_path}primer.png`}/>
          <img className='' src={`${file_path}IMG_9912.jpg`}/>
        </div>
        <div className='grid grid-cols-2'>
          <img className='' src={`${file_path}devil_1.png`}/>
          <img className='' src={`${file_path}clouds_1.png`}/>
          <img className='' src={`${file_path}gas_light_4.png`}/>
          <img className='' src={`${file_path}crushie_4.png`}/>
        </div>
        <img src={`${file_path}IMG_7409.jpg`}/>
        <img src={`${file_path}team.svg`}/>


      </div>

    </div>
  )
}

export default Project_1
