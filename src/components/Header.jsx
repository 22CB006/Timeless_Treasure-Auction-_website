import React, { useState } from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthPage from './Auth/AuthPage'; // Import the AuthPage component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cartCount = useSelector((state) => state.cart.totalCount);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <div className="logo-text">𝓣𝓘𝓜𝓔𝓛𝓔𝓢𝓢 𝓣𝓡𝓔𝓐𝓢𝓤𝓡𝓔</div> {/* Use text as a placeholder for logo */}
        </Link>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Saved: {cartCount}</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/how-to-sell">How to Sell</Link></li>
            <li><Link to="/auctions">Auctions</Link></li>
            <li><a href="#" onClick={toggleModal}>Login/Signup</a></li> {/* Modal trigger */}
            <li><Link to="/admin">Admin Dashboard</Link></li>
          </ul>
        </nav>
      </div>
      {isModalOpen && <AuthPage toggleModal={toggleModal} />} {/* Conditional rendering of the modal */}
    </header>
  );
};

export default Header;
