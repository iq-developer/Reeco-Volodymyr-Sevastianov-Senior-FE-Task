import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="border border-slate-300 h-full relative">
      <div className="w-48 h-48 flex justify-center items-center">
        <img src={image} alt={name} height="180px" width="180px" />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-white"></div>
    </div>
  );
};

export default ProductCard;
