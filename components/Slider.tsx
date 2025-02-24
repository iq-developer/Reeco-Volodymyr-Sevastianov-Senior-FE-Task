'use client';

import React, { useState } from 'react';

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
    <div className={`slider ${orientation}`}>
      {currentIndex > 0 && <button onClick={handlePrev}>Prev</button>}
      <div
        className="slider-content"
        style={{
          transform: `translate${orientation === 'horizontal' ? 'X' : 'Y'}(-${
            currentIndex * (moveByItem ? 100 : moveByPixels)
          }px)`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item">
            {item}
          </div>
        ))}
      </div>
      {currentIndex < items.length - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Slider;
