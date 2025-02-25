import React from 'react';

interface ChipProps {
  category: string;
  color?: string;
}

const Chip: React.FC<ChipProps> = ({ category, color = 'slate' }) => {
  return (
    <div
      className={`border bg-slate-200 border border-white font-bold text-slate-900 w-32 p-6 h-full flex items-center justify-center ${color}`}
    >
      {category}
    </div>
  );
};

export default Chip;
