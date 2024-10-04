import React from 'react';

type ImageGridProps = {
  images: string[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className=' columns-sm gap-4'>
      {images.map((src, index) => (
        <img key={index} className=' rounded-md py-2' src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
