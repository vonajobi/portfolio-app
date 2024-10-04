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
    <div className=' flex items-center justify-center w-screen h-screen bg-[#5280FF]'>
      <div className='gap-3 flex flex-col w-2/3 h-full'>

        <img src={`${file_path}intro.png`}/>
        <div className='w-full min-h-full bg-[url(/assets/projects/paladone/brief.svg)] bg-contain bg-no-repeat relative'>
          <div className= {` absolute top-1/2 left-1/4 max-w-5xl`}>
            <span className= {`${oswald.className} text-6xl text-[#262654]`}>
              Overview
            </span>
            <br/><br/>
            <span className='text-lg font-bold'> Paladone's Lighting Project</span>
            <br/>
            <span>
            Paladone is the UK's market-leading designer, innovator, and supplier of gifting products, renowned for its iconic licenses and trend-focused products.
            Paladone has tasked me with advancing their most successful category—Lighting—by incorporating new sustainable practices and expanding into outdoor entertainment.
            In response, I developed a construction set that enables users to create their own designs and compete with others both in person and virtually.
            </span>
          </div>
        </div>

        <div className='w-full min-h-full bg-[url(/assets/projects/paladone/final_concept.svg)] bg-contain bg-no-repeat relative'>
          <div className= {` absolute top-14 left-1/4 max-w-5xl`}>
            <span className= {`${oswald.className} text-6xl text-[#262654]`}>
              H-Blocks
            </span>
            <br/><br/>
            <span > 
              The H-Block Party is a construction style game that combines physical blocks and virtual entertainment. It is primarily for adults seeking therapeutic and creative outlet. 
              It features 7 receiving blocks and one power module. Sample design has one USB-C plug and receptacle on the top and bottom of each block, placement can vary and marketed as different editions. 
            </span>
            <br/><br/>
            <span className='text-lg font-bold'>Basic Operation</span>
            <br/>
            <span>
              The H-Block Party consists of one single Bluetooth module (Head), at least three different type of adjoining blocks, and a connected app. The Bluetooth module will still serve as the communication interface between the physical blocks and the mobile app. It should support Bluetooth Low Energy (BLE) for efficient wireless communication. The power module is responsible for communication with the users mobile device.  Other blocks connect to each other via USB-C and receive power through the power module. When a block receives power it lights up blue. The power module is distinguished by a power button and three battery light indicators. Users can construct any form they like. 
            </span>
            <br/><br/>
            <span>
                Games can be played in person and tracked online. Having a connected app makes scaling easier and reduces waste created with physical products. It alo provides Paladone an opportunity to strengthen customer engagement and promote products.
            </span>
          </div>
        </div>
        <img src={`${file_path}mk_rs_1.svg`}/>
        <div className=' w-full relative' style={{background: `url(${file_path}initial_mk_rs.svg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}  >
          <div className= {` top-1/4 left-12 max-w-xl`}>
            <span className= {`${oswald.className} text-6xl text-[#262654]`}>
            The role of modularity in sustainable design  
            </span>
            <span>           
            <br/><br/>
            Sustainable development includes economic development, social inclusion, and environmental awareness. It balances company interest, environmental concerns, and social concerns.
            Paladone has the potential for social inclusion. Through lighting, they could expand their customer market through sensory integration.           
            <br/><br/>
            Sensory toys help stimulate one or more of the senses and aid in regulating the emotion. Visual stimulation combined with tactile stimulation provides a great opportunity for Paladone to be sustainable.            
            </span>
          </div>
        </div>

        <img src={`${file_path}mk_rs_3.svg`}/>
        <img src={`${file_path}Ideation.svg`}/>
        <img src={`${file_path}ideation_2.jpg`}/>
        <img src={`${file_path}ideation_3.jpg`}/>

        <div className=' w-full min-h-full relative' style={{background: `url(${file_path}ideation_4.svg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  >
          <div className= {` absolute top-1/2 left-40 max-w-3xl`}>
            <span className= {`${oswald.className} text-6xl text-[#262654]`}>
              Redifining the Market
            </span>
            <br/><br/>
            <span className='text-black'>
            Play is not limited to children. In 2022, the LEGO Play Well report found that 30,000 adults from around the globe highlighted the importance of play and its role in modern ‘adult’ life.
            This product is now more suitable for a demographic that values advanced, creative play as a form of relaxation, mental stimulation, and therapeutic activity.
            </span>
          </div>
        </div>
          <img src={`${file_path}final_design.svg`}/>
        <ImageGrid images={finalImages} />
        <img src={`${file_path}marketing.svg`}/>
        <div className='text-4xl'>
          Web Pallette and Pantone Graphics
          <div className='grid grid-cols-4 gap-4 py-5'>
            <img src={`${file_path}Frame_48.png`}/>
            <img src={`${file_path}frame_50.png`}/>
            <img src={`${file_path}frame_51.png`}/>
            <img src={`${file_path}frame_52.png`}/>
            <img src={`${file_path}frame_53.png`}/>
            <img src={`${file_path}frame_54.png`}/>
          </div>
        </div>
        <ImageGrid images={marketingImages} />

      </div>
    </div>
  )
}

export default  Paladone;
