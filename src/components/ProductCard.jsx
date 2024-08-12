import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isInCart) {
      navigate('/cart');
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-category">{product.category}</p>
        <button className="add-to-cart-button" onClick={handleButtonClick}>
          {isInCart ? 'Go to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
