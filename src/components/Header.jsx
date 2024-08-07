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
        <Link to="/" className="logo">Enchanted Bid</Link> {/* Link to the homepage */}
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li> {/* Link to the homepage */}
            <li><Link to="/products">SHOP</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/cart">SAVED: {cartCount}</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><Link to="/how-to-sell">HOW TO SELL</Link></li>
            <li><Link to="/auctions">AUCTIONS</Link></li>
            <li><a href="#" onClick={toggleModal}>LOGIN/SIGNUP</a></li> {/* Modal trigger */}
            <li><Link to="/admin">ADMIN DASHBOARD</Link></li>
          </ul>
        </nav>
      </div>
      {isModalOpen && <AuthPage toggleModal={toggleModal} />} {/* Conditional rendering of the modal */}
    </header>
  );
};

export default Header;
