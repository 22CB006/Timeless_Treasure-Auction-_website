import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/auctions">Auctions</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/how-to-sell">How to Sell</Link></li>
        <li><Link to="/">How to Sell</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navigation;
