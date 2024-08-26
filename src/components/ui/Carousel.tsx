import React, { useState,useEffect } from 'react';

interface Image {
  src: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = (): void => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
<div className="relative w-full overflow-hidden">
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((image, index) => (
      <div key={index} className="flex-shrink-0 w-full h-[60vh]">
        <img
          src={image.src}
          alt={`Slide ${index}`}
          className="object-contain w-full h-full"
        />
      </div>
    ))}
  </div>

  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
  >
    ❮
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
  >
    ❯
  </button>
</div>

  );
};

export default Carousel;
