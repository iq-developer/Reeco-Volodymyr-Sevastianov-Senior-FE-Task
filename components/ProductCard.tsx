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
      <div className="w-64 h-48 flex justify-center items-center">
        <img src={image} alt={name} height="200px" width="200px" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-white"></div>
    </div>
  );
};

export default ProductCard;
