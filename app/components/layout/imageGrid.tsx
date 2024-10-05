import React from 'react';

type ImageGridProps = {
  images: string[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className=' columns-sm gap-2'>
      {images.map((src, index) => (
        <img key={index} className=' rounded-2xl py-1' src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
