import React from 'react';

interface ChipProps {
  category: string;
  color?: string;
}

const Chip: React.FC<ChipProps> = ({
  category,
  color = 'bg-slate-200 text-slate-900',
}) => {
  return (
    <div
      className={`border w-64 text-2xl border-white font-bold p-6 h-full flex items-center justify-center ${color}`}
    >
      {category}
    </div>
  );
};

export default Chip;
