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
    const getGridSpan = (image: string) => {
        return {
            gridColumnEnd: 'span 1',
            gridRowEnd: 'span 1',
        };
    };
    
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-4 auto-rows-[minmax(10px, auto)] grid-auto-flow-dense overflow-y-scroll'>
                {products.map((item) => (
                    <div key={item.title} className='relative' style={getGridSpan(item.image)}>
                        <img className='max-w-lg h-auto' src={item.image} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Sketchbook
