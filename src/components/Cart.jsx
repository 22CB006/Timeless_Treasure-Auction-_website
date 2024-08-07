import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')); // Ensure price is parsed correctly
      const quantity = parseInt(item.quantity, 10);
      if (!isNaN(price) && !isNaN(quantity)) {
        return total + price * quantity;
      }
      console.warn(`Invalid price (${item.price}) or quantity (${item.quantity}) for item ${item.id}`);
      return total;
    }, 0);
  };

  const deliveryFee = 5.00;

  // Memoize the subtotal calculation
  const subtotal = useMemo(() => calculateSubtotal(), [items]);
  const total = useMemo(() => subtotal + deliveryFee, [subtotal]);

  console.log('Items:', items);
  console.log('Total Count:', totalCount);
  console.log('Subtotal:', subtotal);
  console.log('Total:', total);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <p className="cart-item-price">{item.price}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="cart-item-remove">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="price-details">
          <h3>Price Details</h3>
          <div className="price-detail-row">
            <span>Subtotal ({totalCount} items):</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="price-detail-row">
            <span>Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="price-detail-row">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
