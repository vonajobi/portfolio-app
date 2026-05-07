import ImageGrid from '../../components/layout/imageGrid';
import { Metadata } from 'next'; 

const DettyDecember = () => {
    const file_path = "/assets/projects/detty_december/";
    return(
        
        <div className='w-full 
                        h-full
                        md:w-2/3

                        grid
                        grid-row 
                        gap-4 
                        m-auto 
                        place-content-center 
                        '>
            <img src={`${file_path}Artboard 1.webp`}/> 
            <img src={`${file_path}Artboard 2.webp`}/>
            <img src={`${file_path}Artboard 3.webp`}/>
            <img src={`${file_path}Artboard 4.webp`}/>
            <img src={`${file_path}Artboard 5.webp`}/>
            <img src={`${file_path}Artboard 6.webp`}/>
            <img src={`${file_path}Artboard 7.webp`}/>
            <a href='https://jazz-synth.vercel.app/' target='_blank'>
                <img src={`${file_path}Artboard 8.jpg`}/>
            </a>
            
            <img src={`${file_path}Artboard 9.webp`}/>
            <img src={`${file_path}Artboard 10.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard_11.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 12.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 13.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 14.webp`}/>
            </div>
            <img src={`${file_path}Artboard 15.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 16.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 17.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 18.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 19.webp`}/>
            </div>
            <img src={`${file_path}Artboard 20.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 21.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 22.webp`}/>
            </div>
            <img src={`${file_path}Artboard 23.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 14.webp`}/>
            </div>
            <img src={`${file_path}Artboard 25.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 26.webp`}/>
            </div>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 27.webp`}/>
            </div>
            <img src={`${file_path}Artboard 28.webp`}/>
            <div className='bg-white'>
                <img src={`${file_path}Artboard 29.webp`}/>
            </div>
        </div>
   
)
}

    
export default DettyDecember
