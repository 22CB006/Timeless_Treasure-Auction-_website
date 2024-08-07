import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Header from './Header';
import Toolbar from './Toolbar';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.products);
  const searchTerm = useSelector(state => state.products.searchTerm);
  const selectedCategory = useSelector(state => state.products.selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    toast.success(`${product.title} added to cart!`);
  };

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="products-container">
      <Header />
      <Toolbar />
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isInCart = cartItems.some(item => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={isInCart}
              />
            );
          })
        ) : (
          <p className="no-items-found">Item not found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
