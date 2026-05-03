import React from 'react';

type MediaItem = {
  src: string;
  type: 'image' | 'video';
};

type ImageGridProps = {
  media: MediaItem[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ media }) => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {media.map((item, index) => (
        item.type === 'image' ? (
          <img 
            key={index} 
            className=' w-full h-full object-cover' 
            src={item.src} 
            alt={`Media ${index}`} 
          />
        ) : (
          <video 
            key={index} 
            className='py-1  w-full object-cover' 
            autoPlay
            loop 
            >
            <source src={item.src} type="video/mp4" /> 
          </video>
        )
      ))}
    </div>
  );
};

export default ImageGrid;
