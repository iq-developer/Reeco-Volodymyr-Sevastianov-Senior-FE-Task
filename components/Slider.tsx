'use client';

import React, { useState } from 'react';
import DynamicComponent from './DynamicComponent';

interface SliderProps {
  items: any[];
  moveByPixels?: number;
  moveByItem?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const Slider: React.FC<SliderProps> = ({
  items,
  moveByPixels = 100,
  moveByItem = true,
  orientation = 'horizontal',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${
        orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}
    >
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer left-2"
        >
          Prev
        </button>
      )}
      <div
        className={`flex transition-transform duration-300 ease-in-out border-2 border-gray-200 ${
          orientation === 'horizontal' ? 'flex-row' : 'flex-col'
        }`}
        style={{
          transform: `translate${orientation === 'horizontal' ? 'X' : 'Y'}(-${
            currentIndex * (moveByItem ? 100 : moveByPixels)
          }px)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[100px] min-h-[100px] max-h-[200px]"
          >
            <DynamicComponent props={item} />
          </div>
        ))}
      </div>
      {currentIndex < items.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer right-2"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Slider;
