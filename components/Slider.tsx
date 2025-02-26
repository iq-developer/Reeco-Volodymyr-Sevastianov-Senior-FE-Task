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
      className={`relative overflow-hidden w-full h-full  border border-blue-300  ${
        orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}
    >
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 opacity-30 cursor-pointer left-1 z-10 w-0 h-0 border-y-[40px] border-r-[20px] border-transparent border-r-black hover:opacity-50"
        ></button>
      )}
      <div
        className={`flex transition-transform duration-300 ease-in-out  ${
          orientation === 'horizontal' ? 'flex-row' : 'flex-col'
        }`}
        style={{
          transform: `translate${orientation === 'horizontal' ? 'X' : 'Y'}(-${
            currentIndex * (moveByItem ? 256 : moveByPixels)
          }px)`,
        }}
      >
        {items.map((item, index) => (
          <div key={item.id ?? index + 1} className="w-64 h-96">
            <DynamicComponent props={item} />
          </div>
        ))}
      </div>
      {currentIndex < items.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 opacity-30 cursor-pointer right-1 z-10 w-0 h-0 border-y-[40px] border-l-[20px] border-transparent border-l-black hover:opacity-50"
        ></button>
      )}
    </div>
  );
};

export default Slider;
