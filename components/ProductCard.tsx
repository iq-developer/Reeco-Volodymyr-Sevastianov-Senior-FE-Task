import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  width: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  width,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} width={width} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
