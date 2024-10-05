import React from 'react'
import { ProjectsProps } from '@/app/projects/projectProps'
import { Oswald } from 'next/font/google';
import ImageGrid from '@/app/components/layout/imageGrid';

const oswald = Oswald({ subsets: ['latin'], weight: '700' });

const Paladone = ({project}: {project: ProjectsProps}) => {
  const file_path = "/assets/projects/paladone/";
  const marketingImages = [
    `${file_path}Silver.png`,
    `${file_path}Silver_1.png`,
    `${file_path}Silver_2.png`,
    `${file_path}Silver_3.png`,
    `${file_path}Silver_4.png`,
    `${file_path}mockup.png`,
    `${file_path}Graphite.png`
    ];
  const finalImages = [
    `${file_path}final_design_2.jpg`,
    `${file_path}final_design_3.svg`,
    `${file_path}group_1.png`,
    `${file_path}scene_1v2.png`,
    `${file_path}scene_2_k.png`,
    `${file_path}scene_2_n.png`,
    `${file_path}scene_2_t.png`,
    `${file_path}h_block_close_up.png`,
    `${file_path}toy_bloom.png`
  ];
  return (
    <div className=' min-h-screen flex bg-[#5280FF]'>
      <div className=' mx-auto md:w-2/3'>
        <section className='py-12'>
          <img src={`${file_path}intro.png`}/>
        </section>
        {/* intro */}
          <section className= {`h-[32rem] relative bg-[url(/assets/projects/paladone/brief.svg)] bg-contain bg-no-repeat `}>
            <div className='absolute  top-40 left-32 w-2/3 md:w-3/4 md:top-1/3   '>
            <h1 className= {`${oswald.className} text-6xl text-[#262654] mb-5`}>
              Overview
            </h1>
            <p className=' text-sm md:text-lg font-bold'> Paladone's Lighting Project</p>
            <p>
              Paladone is the UK's market-leading designer, innovator, and supplier of gifting products, renowned for its iconic licenses and trend-focused products.
              Paladone has tasked me with advancing their most successful category—Lighting—by incorporating new sustainable practices and expanding into outdoor entertainment.
              In response, I developed a construction set that enables users to create their own designs and compete with others both in person and virtually.
            </p>
            </div>
          </section>
        {/* h block overview */}
        <section className=' bg-[url(/assets/projects/paladone/final_concept.svg)] bg-contain bg-no-repeat h-[32rem] mb-40 md:w-full md:mb-10'>
            <div className=' w-2/3 md:w-3/4 ml-40'>
            <h1 className= {`${oswald.className} text-6xl my-6 text-[#262654]`}>
              H-Blocks
            </h1>
            <p className='my-6 text-sm'> 
              The H-Block Party is a construction style game that combines physical blocks and virtual entertainment. It is primarily for adults seeking therapeutic and creative outlet. 
              It features 7 receiving blocks and one power module. Sample design has one USB-C plug and receptacle on the top and bottom of each block, placement can vary and marketed as different editions. 
            </p>
            <p className='md:text-lg font-bold my-2 text-sm'>Basic Operation</p>
            <p>
              The H-Block Party consists of one single Bluetooth module (Head), at least three different type of adjoining blocks, and a connected app. The Bluetooth module will still serve as the communication interface between the physical blocks and the mobile app. It should support Bluetooth Low Energy (BLE) for efficient wireless communication. The power module is responsible for communication with the users mobile device.  Other blocks connect to each other via USB-C and receive power through the power module. When a block receives power it lights up blue. The power module is distinguished by a power button and three battery light indicators. Users can construct any form they like. 
            </p>
            <p>
              Games can be played in person and tracked online. Having a connected app makes scaling easier and reduces waste created with physical products. It alo provides Paladone an opportunity to strengthen customer engagement and promote products.
            </p>
          </div>
        </section>
        {/* Sustainability  */}
        <section className='mb-10'>
          <img src={`${file_path}mk_rs_1.svg`}/>
        </section>
        <section className='w-full relative mb-10' style={{background: `url(${file_path}initial_mk_rs.svg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}  >
          <div className= {` top-1/4 left-12 max-w-xl`}>
            <h1 className= {`${oswald.className} ml-10 md:ml-0 text-6xl text-[#262654]`}>
            The role of modularity in sustainable design  
            </h1>
            <p className='ml-10 md:ml-0'>           
            <br/><br/>
            Sustainable development includes economic development, social inclusion, and environmental awareness. It balances company interest, environmental concerns, and social concerns.
            Paladone has the potential for social inclusion. Through lighting, they could expand their customer market through sensory integration.           
            <br/><br/>
            Sensory toys help stimulate one or more of the senses and aid in regulating the emotion. Visual stimulation combined with tactile stimulation provides a great opportunity for Paladone to be sustainable.            
            </p>
          </div>
        </section>

        <img className='mb-10' src={`${file_path}mk_rs_3.svg`}/>
        <img src={`${file_path}Ideation.svg`} className='mb-10'/>
        <img src={`${file_path}ideation_2.jpg`} className='mb-10'/>
        <img src={`${file_path}ideation_3.jpg`} className='mb-10'/>

        <section className='max-w-screen h-[32rem] relative mb-10' style={{background: `url(${file_path}ideation_4.svg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  >
          <div className= {`w-2/3 absolute top-1/4 left-40`}>
            <p className= {`${oswald.className} text-6xl text-[#262654] mb-6`}>
              Redifining the Market
            </p>
            <p className='text-black'>
            Play is not limited to children. In 2022, the LEGO Play Well report found that 30,000 adults from around the globe highlighted the importance of play and its role in modern ‘adult’ life.
            This product is now more suitable for a demographic that values advanced, creative play as a form of relaxation, mental stimulation, and therapeutic activity.
            </p>
          </div>
        </section>
          <img src={`${file_path}final_design.svg`} className='mb-10'/>
        <ImageGrid images={finalImages} />
        <img src={`${file_path}marketing.svg`} className='mt-10'/>
        <section className='text-4xl m-10 '>
          <h1> Web Pallette and Pantone Graphics </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 md:gap-4 md:py-5 '>
            <img src={`${file_path}Frame_48.png`}/>
            <img src={`${file_path}frame_50.png`}/>
            <img src={`${file_path}frame_51.png`}/>
            <img src={`${file_path}frame_52.png`}/>
            <img src={`${file_path}frame_53.png`}/>
            <img src={`${file_path}frame_54.png`}/>
          </div>
        </section>
        <ImageGrid images={marketingImages} />

      </div>
    </div>
  )
}

export default  Paladone;
