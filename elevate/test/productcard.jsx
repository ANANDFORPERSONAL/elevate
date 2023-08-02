import React from 'react';
import './productcard.css';

function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductCard;
