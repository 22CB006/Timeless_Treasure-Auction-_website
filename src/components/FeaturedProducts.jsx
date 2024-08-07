import React from 'react';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
