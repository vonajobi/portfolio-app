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
    {src: `${file_path_2}crushie_base.webp`, type: 'image'as const},
    {src: `${file_path}crushie_1.webp`, type: 'image' as const},
    {src: `${file_path}crushie_3.webp`, type: 'image' as const},
    {src: `${file_path}crushie_4.webp`, type: 'image' as const},
  ];
  const devilImages = [
    {src: `${file_path_2}down_bad_base.webp`, type: 'image' as const},
    {src: `${file_path}devil_2.webp`, type: 'image' as const},
    {src: `${file_path}devil_4.webp`, type: 'image' as const},
    {src: `${file_path}devil_5.webp`, type: 'image' as const},
    {src: `${file_path}down_bad_render.webp`, type: 'image' as const},
    {src: `${file_path}devil_1.webp`, type: 'image' as const},
  ];

  const gasLightImages = [
    {src: `${file_path_2}gas_light_base.webp`, type: 'image' as const},
    {src: `${file_path}gas_light_1.webp`, type: 'image' as const},
    {src: `${file_path}gas_light_2.webp`, type: 'image' as const},
    {src: `${file_path}animation.mp4`, type: 'video' as const},
    {src: `${file_path}gas_light_4.webp`, type: 'image' as const},
  ];

  const cloudsImages = [
    {src: `${file_path_2}head_clouds_base.webp`, type: 'image' as const},
    {src: `${file_path}clouds_3.webp`, type: 'image' as const},
    {src: `${file_path}clouds_2.webp`, type: 'image' as const},
    {src: `${file_path}clouds_1.webp`, type: 'image' as const},
  ];
  const loveSickImages = [
    {src: `${file_path_2}love_sick_base.webp`, type: 'image' as const},
    {src: `${file_path}love_sick_3.webp`, type: 'image' as const},
    {src: `${file_path}IMG_9911.webp`, type: 'image' as const},
    {src: `${file_path}love_sick_2.webp`, type: 'image' as const},
  ];
  const ghostedImages = [
    {src: `${file_path_2}ghosted_base.webp`, type: 'image' as const},
    {src: `${file_path}ghosted_2.webp`, type: 'image' as const},
    {src: `${file_path}ghosted_3.webp`, type: 'image' as const},
  ];
  const finalImages = [
         {src: `${file_path}packaging_2.webp`, type: 'image' as const},
         {src: `${file_path}primer.webp`, type: 'image' as const},
         {src: `${file_path}IMG_9912.webp`, type: 'image' as const}
  ];

  return (
    <div className='flex justify-center w-screen border-box'>

      <div className=' flex flex-col space-y-4 w-full md:w-2/3'>
      {/* Intro */}
        <img src={`${file_path}1.webp`} alt={'Crushies a Blind Box Series'} className='w-full h-full'/>
        <img src={`${file_path}IMG_7344.webp`}  />
      {/* Crushie */}
        <img src={`${file_path}3.webp`} alt={'Design Process'} className='w-full h-full'/>          
        <img className='' src={`${file_path}4.webp`}/>
        <img className='' src={`${file_path}5.webp`} alt='Design Explorations'/>
        <img className='' src={`${file_path}8.webp`}alt='Typography and Color Pallete' />
        <img className='' src={`${file_path}crushie_2.webp`}alt='Crushie'/>
        <ImageGrid media={crushieImages} />
      {/*DownBad  */}
        <img className='' src={`${file_path}devil_3.webp`} alt='Down Bad'/>
        <ImageGrid media={devilImages} />
      {/* GasLight */}
        <img className='' src={`${file_path}gas_light_3.webp`} alt='Gas Light'/>
        <ImageGrid media={gasLightImages} />
      {/* Head in the Clouds */}
        <img className='' src={`${file_path}clouds_4.webp`} alt='Head in the Clouds'/>
        <ImageGrid media={cloudsImages} />
      {/* Love Sick */}
        <img className='' src={`${file_path}love_sick_5.webp`} alt='Love Sick'/>
        <ImageGrid media={loveSickImages} />
      {/* Ghosted */}
        <img className='' src={`${file_path}ghosted_1.webp`} alt='Ghosted'/>
        <ImageGrid media={ghostedImages} />
      {/* Final Images */}
        <img className='' src={`${file_path}final_design.svg`} alt='Final Designs'/>
        <ImageGrid media={finalImages} />
        <img src={`${file_path}IMG_7409.webp`} alt='Crushies a Blind Box Series'/>
        <img src={`${file_path}team.svg`}/>


      </div>

    </div>
  )
}

export default Project_1
