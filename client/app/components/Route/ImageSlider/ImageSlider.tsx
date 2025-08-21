import React from 'react';
import "./Style.css"

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-[200px] h-[200px] rounded-full inline-block ml-40"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
