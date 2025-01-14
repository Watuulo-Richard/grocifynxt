"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ImageOne from '@/public/1.jpg';
import ImageTwo from '@/public/2.jpg';
import ImageThree from '@/public/3.jpg';
import ImageFour from '@/public/4.jpg';
import ImageFive from '@/public/5.jpg';

export default function Carousel() {
  const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full p-4 md:p-8 bg-white">
      {/* Carousel wrapper */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
         
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-green-600 scale-110'
                : 'bg-green-300 hover:bg-green-500'
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-400"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-400"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
