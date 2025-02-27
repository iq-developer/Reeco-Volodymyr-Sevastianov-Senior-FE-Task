import React from 'react';
import { ChipProps } from '../types/types';

const Chip: React.FC<ChipProps> = ({ category, color = 'slate' }) => {
  const colors: { [key: string]: string } = {
    slate: 'bg-slate-200 text-slate-900',
    cyan: 'bg-cyan-200 text-cyan-900',
    rose: 'bg-rose-200 text-rose-900',
    blue: 'bg-blue-200 text-blue-900',
    green: 'bg-green-200 text-green-900',
    orange: 'bg-orange-200 text-orange-900',
  };

  return (
    <div
      className={`border w-64 text-2xl border-white font-bold p-6 h-full flex items-center justify-center ${colors[color]}`}
    >
      {category}
    </div>
  );
};

export default Chip;
