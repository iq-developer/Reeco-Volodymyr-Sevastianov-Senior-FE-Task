'use client';

import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import data from '../data.json';
import { Item } from '../types/types';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <>
      <div className="p-2 flex justify-center">
        <Slider items={items} />
      </div>
      <div className=" flex justify-center">
        <div className="w-64 m-16">
          <Slider items={items} />
        </div>

        <div className="w-64 m-16 h-96">
          <Slider items={items} orientation="vertical" />
        </div>
      </div>
    </>
  );
}
