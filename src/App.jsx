// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Products from './components/products'; 
import Cart from './components/Cart';
import About from './components/About';
import ContactUs from './components/ContactUs'; 
import HowToSell from './components/HowToSell';
import Auctions from './components/Auctions';
import AuthPage from './components/Auth/AuthPage'; 
import AdminDashboard from './components/Admin/AdminDashboard' 
import CreateAuction from './components/Admin/CreateAuction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/how-to-sell" element={<HowToSell />}/>
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create-auction" element={<CreateAuction />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
