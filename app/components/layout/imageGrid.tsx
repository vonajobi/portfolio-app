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
    <div className='columns-sm gap-2'>
      {media.map((item, index) => (
        item.type === 'image' ? (
          <img 
            key={index} 
            className='py-1 h-64 w-full object-cover' 
            src={item.src} 
            alt={`Media ${index}`} 
          />
        ) : (
          <video 
            key={index} 
            className='py-1 h-64 w-full object-cover' 
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
