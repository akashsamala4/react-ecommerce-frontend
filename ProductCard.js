import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });

    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={handleAddToCart}>
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
