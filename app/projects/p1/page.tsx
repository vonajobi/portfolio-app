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
    `${file_path_2}crushie_base.png`,
    `${file_path}crushie_1.png`,
    `${file_path}crushie_3.png`,
    `${file_path}crushie_4.png`,
  ];
  const devilImages = [
    `${file_path_2}down_bad_base.png`,
    `${file_path}devil_2.png`,
    `${file_path}devil_4.png`,
    `${file_path}devil_5.png`,
    `${file_path}downBad.png`,
    `${file_path}devil_1.png`,
  ];

  const gasLightImages = [
    `${file_path_2}gas_light_base.jpg`,
    `${file_path}gas_light_1.png`,
    `${file_path}gas_light_2.png`,
    `${file_path}gas_light_5.gif`,
    `${file_path}gas_light_4.png`,
  ];

  const cloudsImages = [
    `${file_path_2}head_clouds_base.png`,
    `${file_path}clouds_3.png`,
    `${file_path}clouds_2.png`,
    `${file_path}clouds_1.png`,
  ];
  const loveSickImages = [
    `${file_path_2}love_sick_base.png`,
    `${file_path}love_sick_3.png`,
    `${file_path}IMG_9911.jpg`,
    `${file_path}love_sick_2.png`,
  ];
  const ghostedImages = [
    `${file_path_2}ghosted_base.png`,
    `${file_path}ghosted_2.png`,
    `${file_path}ghosted_3.png`,
  ];
  const finalImages = [
         `${file_path}packaging_2.png`,
         `${file_path}primer.png`,
         `${file_path}IMG_9912.jpg`
  ];

  return (
    <div className='flex justify-center w-screen border-box'>

      <div className=' flex flex-col space-y-4 w-2/3'>
      {/* Intro */}
        <img src={`${file_path}1.jpg`} alt={'Crushies a Blind Box Series'} className='w-full h-auto'/>
        <img src={`${file_path}IMG_7344.png`}  />
      {/* Crushie */}
        <img src={`${file_path}3.jpg`} alt={'Design Process'} className='w-full h-auto'/>          
        <img className='' src={`${file_path}4.jpg`}/>
        <img className='' src={`${file_path}5.jpg`} alt='Design Explorations'/>
        <img className='' src={`${file_path}8.jpg`}alt='Typography and Color Pallete' />
        <img className='' src={`${file_path}crushie_2.png`}alt='Crushie'/>
        <ImageGrid images={crushieImages} />
      {/*DownBad  */}
        <img className='' src={`${file_path}devil_3.png`} alt='Down Bad'/>
        <ImageGrid images={devilImages} />
      {/* GasLight */}
        <img className='' src={`${file_path}gas_light_3.png`} alt='Gas Light'/>
        <ImageGrid images={gasLightImages} />
      {/* Head in the Clouds */}
        <img className='' src={`${file_path}clouds_4.png`} alt='Head in the Clouds'/>
        <ImageGrid images={cloudsImages} />
      {/* Love Sick */}
        <img className='' src={`${file_path}love_sick_5.png`} alt='Love Sick'/>
        <ImageGrid images={loveSickImages} />
      {/* Ghosted */}
        <img className='' src={`${file_path}ghosted_1.png`} alt='Ghosted'/>
        <ImageGrid images={ghostedImages} />
      {/* Final Images */}
        <img className='' src={`${file_path}final_design.svg`} alt='Final Designs'/>
        <ImageGrid images={finalImages} />
        <img src={`${file_path}IMG_7409.jpg`} alt='Crushies a Blind Box Series'/>
        <img src={`${file_path}team.svg`}/>


      </div>

    </div>
  )
}

export default Project_1
