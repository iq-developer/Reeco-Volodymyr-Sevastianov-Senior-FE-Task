'use client';

import React, { useState, useEffect, useRef } from 'react';
import DynamicComponent from './DynamicComponent';

interface SliderProps {
  items: any[];
  orientation?: 'horizontal' | 'vertical';
}

const Slider: React.FC<SliderProps> = ({
  items,
  orientation = 'horizontal',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  // const [moveByItem, setMoveByItem] = useState(true);
  // const [moveByPixels, setMoveByPixels] = useState(100);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWrapperWidth = () => {
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
      }
    };

    updateWrapperWidth();
    window.addEventListener('resize', updateWrapperWidth);

    return () => {
      window.removeEventListener('resize', updateWrapperWidth);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      if (nextOffset > maxOffset) {
        setCurrentIndex(
          currentIndex +
            Math.ceil((maxOffset - currentIndex * itemWidth) / itemWidth)
        );
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };
  const itemWidth = 256;
  const nextIndex = currentIndex + 1;
  const sliderWidth = items.length * itemWidth;
  const maxOffset = sliderWidth - wrapperWidth;
  const nextOffset = nextIndex * itemWidth;
  const rest = maxOffset - nextOffset;
  const moveByItem = rest > itemWidth;
  const moveDistance = currentIndex * itemWidth;
  //const moveDistance = moveByItem ? currentIndex * itemWidth : 50;

  console.log('> wrapperWidth:', wrapperWidth);
  console.log('> sliderWidth:', sliderWidth);
  console.log('maxOffset:', maxOffset);
  console.log('nextOffset:', nextOffset);
  console.log('rest:', rest);
  console.log('moveByItem:', moveByItem);

  return (
    <div
      id="wrapper"
      ref={wrapperRef}
      className={`relative overflow-hidden w-full h-full border-2 border-blue-300 ${
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
        id="slider"
        className={`border-2 border-orange-300 flex transition-transform duration-300 ease-in-out ${
          orientation === 'horizontal' ? 'flex-row' : 'flex-col'
        }`}
        style={{
          transform: `translate${
            orientation === 'horizontal' ? 'X' : 'Y'
          }(-${moveDistance}px)`,
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
