import React from 'react';

interface ChipProps {
  category: string;
}

const Chip: React.FC<ChipProps> = ({ category }) => {
  return <div className="chip">{category}</div>;
};

export default Chip;
