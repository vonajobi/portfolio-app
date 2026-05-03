"use client"
import React from 'react'
import sketchbook from '../../public/data/sketchbook.json'
import { useState } from 'react'

type SketchbookProps = {
    image: string;
    title: string;
    category: string;
    link?: string;
};

const Sketchbook = () => {
    const [products, setProducts] = useState<SketchbookProps[]>(sketchbook);
    const [activeFilter, setActiveFilter] = useState<string>('Brain Dump');
    const [selectedImage, setSelectedImage] = useState<SketchbookProps | null>(null);

    const categories = ['Brain Dump', 'art & design', '3D', 'study', 'engineering'];

    const filteredProducts = activeFilter === 'Brain Dump' 
        ? products 
        : products.filter(item => item.category === activeFilter);

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
        <div className='w-full flex gap-6'>
            {/* Sidebar Filters */}
            <div className='hidden md:flex flex-col gap-3 w-sm top-20 h-fit'>
                <p className={` font-bold text-6xl text-white `}>FILTERS</p>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={` py-2 text-left font-light transition-all ${
                            activeFilter === cat
                                ? 'bg-white/90 text-black rounded'
                                : 'bg-transparent text-white/60 ease-in hover:text-white'
                        }`}
                    >
                        {"[" + cat.charAt(0).toUpperCase() + cat.slice(1) + "]"}
                        
                    </button>
                ))}
            </div>

            <div className='flex-1'>
                {/* Mobile Filter Buttons */}
                <div className='flex md:hidden mt-6 flex-wrap gap-2 mb-2 pb-4 border-b border-gray-400'>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-3 py-1 text-sm rounded font-medium transition-all ${
                                activeFilter === cat
                                    ?  'bg-white/90 text-black'
                                    : 'bg-transparent text-white/60 border border-gray-600 hover:border-white'
                            }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className='columns-1 lg:columns-3 gap-2'>
                    {filteredProducts.map((item) => (
                        <div 
                            key={item.title} 
                            className='py-2 cursor-pointer hover:opacity-80 transition-opacity'
                            onClick={() => setSelectedImage(item)}
                        >
                            {isImage(item.image) && (
                                <img 
                                    className='w-full max-w-md max-h-96 rounded-xl object-cover' 
                                    src={item.image} 
                                    alt={item.title} 
                                />
                            )}
                            {isVideo(item.image) && (
                                <video 
                                    className='w-full max-w-md max-h-96 rounded-xl object-cover' 
                                    autoPlay loop playsInline
                                >
                                    <source src={item.image} type={`video/${item.image.split('.').pop()?.toLowerCase()}`} />
                                </video>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className='fixed inset-0 bg-black/60 backdrop-blur-sm  flex items-center justify-center z-50 p-4'
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className='absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition z-51'
                        onClick={() => setSelectedImage(null)}
                        title="Close (ESC)"
                    >
                        ✕
                    </button>
                   
                    <div 
                        className='flex flex-col items-center justify-center'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isImage(selectedImage.image) && (
                            <img 
                                src={selectedImage.image} 
                                alt={selectedImage.title}
                                className='max-h-150 object-cover rounded-lg border-4 border-white'
                            />
                        )}
                        {isVideo(selectedImage.image) && (
                            <video 
                                className=' max-h-150 object-cover rounded-lg border-4 border-white' 
                                autoPlay loop playsInline
                            >
                                <source src={selectedImage.image} type={`video/${selectedImage.image.split('.').pop()?.toLowerCase()}`} />
                            </video>
                        )}
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default Sketchbook
