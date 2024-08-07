import React from 'react';
import { useSelector } from 'react-redux';
import './HomePage.css';

const HomePage = () => {
  const auctionData = useSelector(state => state.home.auctionData);
  const featuredProducts = useSelector(state => state.home.featuredProducts);
  const categories = useSelector(state => state.home.categories);

  return (
    <div className="home-page-container">
      <div className="home-banner">
        <div className="home-banner-text">
          <h1>Antique Shop</h1>
          <p>
            Welcome to Enchanted Bid, your destination for unique and timeless antiques. 
            Discover hidden treasures and exquisite pieces that add a touch of history to your collection.
          </p>
        </div>
      </div>

      <div className="home-content">
        <section className="auctions-info">
          <h2>Featured Auctions</h2>
          <div className="auctions-list">
            {auctionData.map((auction, index) => (
              <div className="auction-item" key={index}>
                <h3>{auction.title}</h3>
                <p>{auction.details}</p>
                <p>Starts on: {auction.date}</p>
                {auction.link && <a href={auction.link}>Explore</a>}
                {auction.image && <img src={auction.image} alt={auction.title} />}
              </div>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <h2>Let's go treasure-hunting.</h2>
          <p>Join the world's best auctions for one-of-a-kind art, antiques & luxury goods.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Join</button>
          </form>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h2>Featured Auctioneers</h2>
          <ul>
            <li>1 Great Deal Auctions</li>
            <li>Florida Estate Sales Inc.</li>
            <li>Rago Arts and Auction Center</li>
            {/* Add more auctioneers as needed */}
          </ul>
        </div>
        <div className="footer-content">
          <h2>Searches To Follow</h2>
          <ul>
            <li>Furniture</li>
            <li>Paintings</li>
            <li>Coins, Currency, & Stamps</li>
            {/* Add more searches as needed */}
          </ul>
        </div>
        <div className="footer-content">
          <p>© 2024 Antique Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
