import React from 'react';
import { useSelector } from 'react-redux';
import './HowToSell.css';

const HowToSell = () => {
  const info = useSelector((state) => state.howToSell.info);

  return (
    <div className="how-to-sell-page">
      <h1>How to Sell</h1>
      <div className="steps-for-selling">
        <h2>Steps for Selling</h2>
        <div className="step-grid">
          <div className="step">
            <img src="images/step1.jpg" alt="Step 1" />
            <h3>Step 1: Register</h3>
            <p>Create an account on our auction platform to get started.</p>
          </div>
          <div className="step">
            <img src="images/step2.jpg" alt="Step 2" />
            <h3>Step 2: List Your Item</h3>
            <p>Upload details and images of the item you wish to sell.</p>
          </div>
          <div className="step">
            <img src="images/step3.jpg" alt="Step 3" />
            <h3>Step 3: Set Auction Terms</h3>
            <p>Define the auction duration, starting price, and other terms.</p>
          </div>
          <div className="step">
            <img src="images/step4.jpg" alt="Step 4" />
            <h3>Step 4: Monitor Bids</h3>
            <p>Keep track of bids and communicate with potential buyers.</p>
          </div>
          <div className="step">
            <img src="images/step5.jpg" alt="Step 5" />
            <h3>Step 5: Complete the Sale</h3>
            <p>Finalize the transaction and ship the item to the buyer.</p>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h2>Need Help?</h2>
        <div className="contact-grid">
          <div className="contact-location">
            <h3>Contact Us</h3>
            <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
          </div>
          <div className="contact-location">
            <h3>FAQs</h3>
            <p>Check out our frequently asked questions for more information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSell;
