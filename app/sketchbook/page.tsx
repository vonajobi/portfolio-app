"use client"
import React from 'react'
import sketchbook from '../../public/data/sketchbook.json'
import { useState } from 'react'


type SketchbookProps = {
    image: string;
    title: string; // Assuming title is part of the sketchbook data
};


const Sketchbook = () => {
    const [products, setProducts] = useState<SketchbookProps[]>(sketchbook);
    const isImage = (file: string) => {
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        const extension = file.split('.').pop()?.toLowerCase();
        return imageExtensions.includes(extension || '');
    }
    const isVideo = (file: string) => {
        const vidExtensions = ['mp4', 'mov']
        const extension = file.split('.').pop()?.toLowerCase();
        return vidExtensions.includes(extension || '');
    }
    
    return (
        // <div className='px-6 h-screen w-screen overflow-y-scroll '>
            <div className=' columns-lg gap-4 px-5'>
                {products.map((item) => (
                    <div key={item.title} className='py-2 '>
                        {isImage(item.image) && (
                            <img className='w-full rounded-xl' src={item.image} alt={item.title} />
                        )}
                        {isVideo(item.image) && (
                            <video className='w-full rounded-xl' controls>
                                <source src={item.image} type={`video/${item.image.split('.').pop()?.toLowerCase()}`} />
                            </video>
                        )}
                    </div>
                ))}
            </div>
        // </div>
    );
};


export default Sketchbook
