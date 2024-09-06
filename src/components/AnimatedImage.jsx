import React from 'react';
import './AnimatedImage.css';

const AnimatedImage = ({src, alt} ) => {
  return (
    <div className="flex justify-center items-center">
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          className="w-[400px] h-[400px] object-cover rounded-full border-8 border-animated"
         
        />
      </div>
    </div>
  );
};

export default AnimatedImage;