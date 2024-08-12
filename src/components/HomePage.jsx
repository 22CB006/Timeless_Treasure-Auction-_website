import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './HomePage.css';

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
      <button>
        {question}
        <span className="arrow">{isActive ? '▲' : '▼'}</span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const auctionData = useSelector((state) => state.home.auctionData);
  const featuredProducts = useSelector((state) => state.home.featuredProducts);
  const categories = useSelector((state) => state.home.categories);

  const faqData = [
    {
      question: 'What is an auction?',
      answer: 'An auction is a process of buying and selling goods or services by offering them up for bid, taking bids, and then selling the item to the highest bidder.',
    },
    {
      question: 'How do I participate in an auction?',
      answer: 'To participate, you need to register, find the auction you are interested in, and place your bids. If you win, you will be notified to complete the purchase.',
    },
    // Add more FAQ items here
  ];

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
        <section className="newsletter">
          <h2>Let's go treasure-hunting.</h2>
          <p>Join the world's best auctions for one-of-a-kind art, antiques & luxury goods.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Join</button>
          </form>
        </section>

        <section className="meet-us">
          <h2>Meet Us</h2>
          <div className="team-list">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Sophia" />
              <h3>Sophia</h3>
              <p>Antique Expert</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Liam" />
              <h3>Liam</h3>
              <p>Auctioneer Extraordinaire</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Olivia" />
              <h3>Olivia</h3>
              <p>Customer Whisperer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Noah" />
              <h3>Noah</h3>
              <p>Tech Wizard</p>
            </div>
          </div>
        </section>

        <section className="trusted-partners">
          <h2>Our Trusted Partners</h2>
          <div className="partners-list">
            <img src="https://via.placeholder.com/150" alt="Partner 1" />
            <img src="https://via.placeholder.com/150" alt="Partner 2" />
            <img src="https://via.placeholder.com/150" alt="Partner 3" />
            <img src="https://via.placeholder.com/150" alt="Partner 4" />
            <img src="https://via.placeholder.com/150" alt="Partner 5" />
            <img src="https://via.placeholder.com/150" alt="Partner 6" />
          </div>
        </section>

        <section className="discover-antiques">
          <h2>Discover Unique Antiques</h2>
          <div className="video-preview">
            <img src="https://via.placeholder.com/300x200" alt="Antiques Video" />
          </div>
        </section>

        <section className="auctions-info">
          <h2>Featured Auctions</h2>
          <div className="auction-cards">
            {auctionData.map((auction, index) => (
              <div className="auction-card" key={index}>
                {auction.image && <img className="auction-image" src={auction.image} alt={auction.title} />}
                <div className="auction-card-content">
                  <h3>{auction.title}</h3>
                  <p>{auction.details}</p>
                  <p>Starts on: {auction.date}</p>
                  {auction.link && <a className="auction-link" href={auction.link}>Explore</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h2>Featured Auctioneers</h2>
          <ul>
            <li>1 Great Deal Auctions</li>
            <li>Florida Estate Sales Inc.</li>
            <li>Rago Arts and Auction Center</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Searches To Follow</h2>
          <ul>
            <li>Furniture</li>
            <li>Paintings</li>
            <li>Coins, Currency, & Stamps</li>
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
