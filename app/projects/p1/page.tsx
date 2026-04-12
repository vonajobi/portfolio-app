import React from 'react'
import ImageGrid from '../../components/layout/imageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: 'Crushies a Blind Box Series',
}
 const Project_1 = () => {
  const file_path = "/assets/projects/blind_box/";
  const file_path_2 = "/assets/projects/blind_box/drawings/";
  const crushie_red = '#a61e1e';

  const crushieImages = [
    {src: `${file_path_2}crushie_base.png`, type: 'image'as const},
    {src: `${file_path}crushie_1.png`, type: 'image' as const},
    {src: `${file_path}crushie_3.png`, type: 'image' as const},
    {src: `${file_path}crushie_4.png`, type: 'image' as const},
  ];
  const devilImages = [
    {src: `${file_path_2}down_bad_base.png`, type: 'image' as const},
    {src: `${file_path}devil_2.png`, type: 'image' as const},
    {src: `${file_path}devil_4.png`, type: 'image' as const},
    {src: `${file_path}devil_5.png`, type: 'image' as const},
    {src: `${file_path}down_bad_render.png`, type: 'image' as const},
    {src: `${file_path}devil_1.png`, type: 'image' as const},
  ];

  const gasLightImages = [
    {src: `${file_path_2}gas_light_base.jpg`, type: 'image' as const},
    {src: `${file_path}gas_light_1.png`, type: 'image' as const},
    {src: `${file_path}gas_light_2.png`, type: 'image' as const},
    {src: `${file_path}animation.mp4`, type: 'video' as const},
    {src: `${file_path}gas_light_4.png`, type: 'image' as const},
  ];

  const cloudsImages = [
    {src: `${file_path_2}head_clouds_base.png`, type: 'image' as const},
    {src: `${file_path}clouds_3.png`, type: 'image' as const},
    {src: `${file_path}clouds_2.png`, type: 'image' as const},
    {src: `${file_path}clouds_1.png`, type: 'image' as const},
  ];
  const loveSickImages = [
    {src: `${file_path_2}love_sick_base.png`, type: 'image' as const},
    {src: `${file_path}love_sick_3.png`, type: 'image' as const},
    {src: `${file_path}IMG_9911.jpg`, type: 'image' as const},
    {src: `${file_path}love_sick_2.png`, type: 'image' as const},
  ];
  const ghostedImages = [
    {src: `${file_path_2}ghosted_base.png`, type: 'image' as const},
    {src: `${file_path}ghosted_2.png`, type: 'image' as const},
    {src: `${file_path}ghosted_3.png`, type: 'image' as const},
  ];
  const finalImages = [
         {src: `${file_path}packaging_2.png`, type: 'image' as const},
         {src: `${file_path}primer.png`, type: 'image' as const},
         {src: `${file_path}IMG_9912.jpg`, type: 'image' as const}
  ];

  return (
    <div className='flex justify-center w-screen border-box'>

      <div className=' flex flex-col space-y-4 w-full md:w-2/3'>
      {/* Intro */}
        <img src={`${file_path}1.jpg`} alt={'Crushies a Blind Box Series'} className='w-full h-full'/>
        <img src={`${file_path}IMG_7344.png`}  />
      {/* Crushie */}
        <img src={`${file_path}3.jpg`} alt={'Design Process'} className='w-full h-full'/>          
        <img className='' src={`${file_path}4.jpg`}/>
        <img className='' src={`${file_path}5.jpg`} alt='Design Explorations'/>
        <img className='' src={`${file_path}8.jpg`}alt='Typography and Color Pallete' />
        <img className='' src={`${file_path}crushie_2.png`}alt='Crushie'/>
        <ImageGrid media={crushieImages} />
      {/*DownBad  */}
        <img className='' src={`${file_path}devil_3.png`} alt='Down Bad'/>
        <ImageGrid media={devilImages} />
      {/* GasLight */}
        <img className='' src={`${file_path}gas_light_3.png`} alt='Gas Light'/>
        <ImageGrid media={gasLightImages} />
      {/* Head in the Clouds */}
        <img className='' src={`${file_path}clouds_4.png`} alt='Head in the Clouds'/>
        <ImageGrid media={cloudsImages} />
      {/* Love Sick */}
        <img className='' src={`${file_path}love_sick_5.png`} alt='Love Sick'/>
        <ImageGrid media={loveSickImages} />
      {/* Ghosted */}
        <img className='' src={`${file_path}ghosted_1.png`} alt='Ghosted'/>
        <ImageGrid media={ghostedImages} />
      {/* Final Images */}
        <img className='' src={`${file_path}final_design.svg`} alt='Final Designs'/>
        <ImageGrid media={finalImages} />
        <img src={`${file_path}IMG_7409.jpg`} alt='Crushies a Blind Box Series'/>
        <img src={`${file_path}team.svg`}/>


      </div>

    </div>
  )
}

export default Project_1
