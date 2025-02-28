'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import DynamicComponent from './DynamicComponent';
import { Item } from '../types/types';

interface SliderProps {
  items: Item[];
  orientation?: 'horizontal' | 'vertical';
}

const Slider: React.FC<SliderProps> = ({
  items,
  orientation = 'horizontal',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [moveDistance, setMoveDistance] = useState(0);
  const [isMoveByItem, setIsMoveByItem] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setDirection('prev');
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1 && isMoveByItem) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDirection('next');
    }
  }, [currentIndex, items.length, isMoveByItem]);

  useEffect(() => {
    const updateWrapperWidth = () => {
      if (wrapperRef.current) {
        const newWidth = wrapperRef.current.offsetWidth;
        if (newWidth !== wrapperWidth) {
          setWrapperWidth(newWidth);
        }
      }
    };
    updateWrapperWidth();
    window.addEventListener('resize', updateWrapperWidth);
    return () => {
      window.removeEventListener('resize', updateWrapperWidth);
    };
  }, [wrapperWidth]);

  useEffect(() => {
    const itemWidth = orientation === 'horizontal' ? 256 : 384;
    const sliderWidth = items.length * itemWidth;
    const maxOffset = Math.max(sliderWidth - wrapperWidth, 0);
    const offset = currentIndex * itemWidth;
    const rest = maxOffset - offset;

    if (rest > 0 || direction === 'prev') {
      setIsMoveByItem(true);
      setMoveDistance(currentIndex * itemWidth);
    } else {
      setIsMoveByItem(false);
      setMoveDistance(maxOffset);
    }
  }, [currentIndex, items.length, wrapperWidth, moveDistance, direction]);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden  h-full border-4 border-slate-300 ${
        orientation === 'horizontal' ? 'flex-row w-full' : 'flex-col'
      }`}
    >
      {currentIndex > 0 && (
        <button
          title="Previous"
          onClick={handlePrev}
          className={`absolute  transform  opacity-30 cursor-pointer z-10 w-0 h-0  border-transparent border-r-black hover:opacity-50 border-y-[80px] border-r-[40px] ${
            orientation === 'horizontal'
              ? 'top-1/2 -translate-y-1/2 left-1 '
              : '-top-14 left-28 rotate-90'
          }`}
        ></button>
      )}
      <div
        className={` flex transition-transform duration-300 ease-in-out ${
          orientation === 'horizontal' ? 'flex-row' : 'flex-col'
        }`}
        style={{
          transform: `translate${
            orientation === 'horizontal' ? 'X' : 'Y'
          }(-${moveDistance}px)`,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-64 h-96">
            <DynamicComponent props={item} />
          </div>
        ))}
      </div>
      {currentIndex < items.length - 1 && isMoveByItem && (
        <button
          title="Next"
          onClick={handleNext}
          className={`absolute  transform opacity-30 cursor-pointer z-10 w-0 h-0 border-y-[80px] border-l-[40px] border-transparent border-l-black hover:opacity-50 ${
            orientation === 'horizontal'
              ? 'top-1/2 -translate-y-1/2 right-1'
              : '-bottom-14 left-28 rotate-90'
          }`}
        ></button>
      )}
    </div>
  );
};

export default Slider;
