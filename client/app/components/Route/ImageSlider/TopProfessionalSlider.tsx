import React from 'react';
import "./Style.css"

interface ImageSliderProps {
  images: string[];
}

const TopProfessionalSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-[250px] h-[200px] sm:w-[400px] sm:h-[350px]  md:w-[400px] md:h-[350px] lg:w-[400px] lg:h-[350px] inline-block  ml-40"
          />
        ))}
      </div>
    </div>
  );
};

export default TopProfessionalSlider;
