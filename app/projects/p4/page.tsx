import React from 'react'
import { Oswald } from 'next/font/google';
import ImageGrid from '@/app/components/layout/imageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Victoria's Portfolio",
  description: 'H-Block Party',
}

const oswald = Oswald({ subsets: ['latin'], weight: '700' });

const Paladone = () => {
  const file_path = "/assets/projects/paladone/";
  const marketingImages = [
    {src: `${file_path}Silver.png`, type: 'image' as const},
    { src: `${file_path}Silver_1.png`, type: 'image' as const},
    { src: `${file_path}Silver_2.png`, type: 'image' as const},
    { src: `${file_path}Silver_3.png`, type: 'image' as const},
    { src: `${file_path}Silver_4.png`, type: 'image' as const},
    { src: `${file_path}mockup.png`, type: 'image' as const},
    { src: `${file_path}Graphite.png`, type: 'image' as const}
    ];
  const finalImages = [
    { src: `${file_path}final_design_2.jpg`, type: 'image' as const},
    { src: `${file_path}final_design_3.svg`, type: 'image' as const},
    { src: `${file_path}group_1.png`, type: 'image' as const},
    { src: `${file_path}scene_1v2.png`, type: 'image' as const},
    { src: `${file_path}scene_2_k.png`, type: 'image' as const},
    { src: `${file_path}scene_2_n.png`, type: 'image' as const},
    { src: `${file_path}scene_2_t.png`, type: 'image' as const},
    { src: `${file_path}h_block_closeup.png`, type: 'image' as const},
    { src: `${file_path}toy_bloom.png`, type: 'image' as const}
  ];
  return (
    // bg-[#5280FF]
    <>
    <div className='fixed inset-0 bg-[#5280FF] -z-20'></div>
    <div className=' flex  px-2 relative z-10'>
      <div className=' mx-auto md:w-2/3 w-full'>
        <section className='py-12 h-auto'>
          <img src={`${file_path}intro.png`}/>
        </section>
        {/* intro */}
          <section className= {`h-128 relative bg-[url(/assets/projects/paladone/brief.svg)] bg-size-[auto_250] md:bg-contain bg-no-repeat `}>
            <div className='absolute md:left-32 w-2/3 md:w-3/4 md:top-1/3   '>
            <p className= {`${oswald.className} text-3xl md:text-6xl text-[#262654] mb-5`}>
              Overview
            </p>
            <p className=' text-sm md:text-lg font-bold'> {`Paladone's`} Lighting Project</p>
            <p  className='text-sm'>
              Paladone is the {`UK's`} market-leading designer, innovator, and supplier of gifting products, renowned for its iconic licenses and trend-focused products.
              Paladone has tasked me with advancing their most successful category—Lighting—by incorporating new sustainable practices and expanding into outdoor entertainment.
              In response, I developed a construction set that enables users to create their own designs and compete with others both in person and virtually.
            </p>
            </div>
          </section>
        {/* h block overview */}
        <section className=' bg-[url(/assets/projects/paladone/final_concept.svg)] bg-contain bg-no-repeat h-auto md:h-128 mb-40 md:w-full md:mb-10 overview'>
            <div className=' w-2/3 md:w-3/4 ml-32 md:ml-40'>
              <p className= {`${oswald.className} text-3xl md:text-6xl md:mb-0 mb-2 text-[#262654]`}>
                H-Blocks
              </p>
              <p className='text-sm'> 
                The H-Block Party is a construction style game that combines physical blocks and virtual entertainment. It is primarily for adults seeking therapeutic and creative outlet. 
                It features 7 receiving blocks and one power module. Sample design has one USB-C plug and receptacle on the top and bottom of each block, placement can vary and marketed as different editions. 
              </p>
              <p className='md:text-lg font-bold my-2'>Basic Operation</p>
              <p className='text-sm'>
                The H-Block Party consists of one single Bluetooth module (Head), at least three different type of adjoining blocks, and a connected app. The Bluetooth module will still serve as the communication interface between the physical blocks and the mobile app. It should support Bluetooth Low Energy (BLE) for efficient wireless communication. The power module is responsible for communication with the users mobile device.  Other blocks connect to each other via USB-C and receive power through the power module. When a block receives power it lights up blue. The power module is distinguished by a power button and three battery light indicators. Users can construct any form they like. 
              </p>
              <p className='text-sm'>
                Games can be played in person and tracked online. Having a connected app makes scaling easier and reduces waste created with physical products. It alo provides Paladone an opportunity to strengthen customer engagement and promote products.
              </p>
          </div>
        </section>
        {/* Sustainability  */}
        <section className='mb-2 md:mb-10 w-full'>
          <img src={`${file_path}mk_rs_1.svg`} alt='Marketing Research'/>
        </section>
        <section className='w-full h-auto bg-[url(/assets/projects/paladone/initial_mk_rs.svg)] mb-2 md:mb-10 mk-rs-section'>
          <div className= {` md:top-1/4 md:left-12 md:max-w-xl`}>
            <p className= {`${oswald.className} left-10 md:left-0 text-3xl md:text-6xl max-w-xl text-[#262654]`}>
            The role of modularity in sustainable design  
            </p>
            <p className='text-sm left-10 md:left-0'>           
            <br/><br/>
            Sustainable development includes economic development, social inclusion, and environmental awareness. It balances company interest, environmental concerns, and social concerns.
            Paladone has the potential for social inclusion. Through lighting, they could expand their customer market through sensory integration.           
            <br/><br/>
            Sensory toys help stimulate one or more of the senses and aid in regulating the emotion. Visual stimulation combined with tactile stimulation provides a great opportunity for Paladone to be sustainable.            
            </p>
          </div>
        </section>

        <img className='mb-2 md:mb-10' src={`${file_path}mk_rs_3.svg`}/>
        <img src={`${file_path}Ideation.svg`} alt='Ideation' className='mb-2 md:mb-10'/>
        <img src={`${file_path}ideation_2.jpg`} alt='Ideation Sketches' className='mb-2 md:mb-10'/>
        <img src={`${file_path}ideation_3.jpg`} alt='Ideation Skethches, USB Type-C Research' className='mb-2 md:mb-10'/>

        <section className='max-w-screen h-128 relative mb-2 md:mb-10 bg-[url(/assets/projects/paladone/ideation_4.svg)] bg-cover rdf-mrkt-section'>
          <div className= {`w-full h-full md:w-2/3 absolute top-1/4 md:left-40`}>
            <p className= {`${oswald.className} text-3xl md:text-6xl text-[#262654] mb-2 md:mb-6`}>
              Redifining the Market
            </p>
            <p className='text-black text-sm'>
            Play is not limited to children. In 2022, the LEGO Play Well report found that 30,000 adults from around the globe highlighted the importance of play and its role in modern ‘adult’ life.
            This product is now more suitable for a demographic that values advanced, creative play as a form of relaxation, mental stimulation, and therapeutic activity.
            </p>
          </div>
        </section>
          <img src={`${file_path}final_design.svg`} alt='H-Blocks Final Design' className='md:mb-10'/>
        <ImageGrid media={finalImages} />
        <img src={`${file_path}marketing.svg`} alt='Marketing'className='mt-10'/>
        <section className='text-4xl m-10 '>
          <p> Web Pallette and Pantone Graphics </p>
          <div className='grid grid-cols-2 md:grid-cols-4 md:gap-4 md:py-5 '>
            <img src={`${file_path}Frame_48.png`} alt='color pallet Black'/>
            <img src={`${file_path}Frame_50.png`} alt='color pallet CornFlower Blue and Marian Blue'/>
            <img src={`${file_path}Frame_51.png`} alt='color pallet Dark Purple and Bright Crayola Pink'/>
            <img src={`${file_path}Frame_52.png`} alt='color pallet Pantone 649 C and Pantone Jet Set'/>
            <img src={`${file_path}Frame_53.png`} alt='color pallet Pantone 2718 C and Pantone 7685 C'/>
            <img src={`${file_path}Frame_54.png`} alt='color pallet Pantone 4975 C and Pantone 191 C'/>
          </div>
        </section>
        <ImageGrid media={marketingImages} />

      </div>
    </div>
    </>
  )
}

export default  Paladone;
