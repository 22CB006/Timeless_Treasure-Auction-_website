import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutInfo } from '../redux/aboutSlice';
import './About.css';

const About = () => {
  const aboutInfo = useSelector((state) => state.about.aboutInfo);
  const dispatch = useDispatch();

  const handleChangeAboutInfo = () => {
    dispatch(updateAboutInfo('Updated information about our site.'));
  };

  return (
    <div className="about-page">
      <div className="about-intro-section">
        <div className="about-content">
          <h1>Welcome to Our Auction Website</h1>
          <p>
            With thousands of items added daily, our auction website makes discovering and acquiring exceptional art and objects accessible to anyone, anytime, anywhere.
            Our auction website is the world’s leading online marketplace for fine art, antiques, and collectibles. We partner with over 5,000 of the world’s premier auction houses to make it easy for collectors from around the world to discover and acquire the items they are most passionate about all in one place.
          </p>
        </div>
      </div>
      <div className="about-more-info">
        {/* Additional content sections */}
        <section className="find-your-treasure">
          <h2>Find Your Next Treasure</h2>
          <div className="feature">
            <img src="/path/to/painting-illustration.png" alt="Find rare and unique items" className="feature-img" />
            <p>Find rare and unique items through our personalized recommendations.</p>
          </div>
          <div className="feature">
            <img src="/path/to/bidder-console-illustration.png" alt="Bidder Console" className="feature-img" />
            <p>Join the action in real-time as if you were in the saleroom with our intuitive bidder console.</p>
          </div>
          <div className="feature">
            <img src="/path/to/app-icon-illustration.png" alt="Auction Website App" className="feature-img" />
            <p>Never miss an item or auction as you bid, check your status, and search on the go with our top-rated app.</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Sign Up & Start Bidding</h2>
          <button className="cta-button">Sign Up Now</button>
          <p className="closing-note">
            Our Information Security and Data Protection standards are second to none. Our auction website is committed to exceptional insurance, information security, and data protection standards on behalf of all our clients.
          </p>
        </section>

        <section className="new-way-view-art">
          <h2>A New Way to View Art</h2>
          <p>Recently acquired by our auction website, ARTMYN is a pioneer in art-scanning technology, offering collectors a remarkable opportunity to inspect a work of art for details unseen by the naked eye. Get closer to an artwork than ever before and explore the rich textures, nuances, and depth in prominent lots.</p>
          <button className="cta-button">View ARTMYN Scans</button>
        </section>

        <section className="indulge-your-passion">
          <h2>Indulge Your Passion</h2>
          <div className="blog-posts">
            <div className="blog-post">
              <h3>Cartier Jewelry: From Louis-François Cartier to Modern Ownership</h3>
              <p>Learn about Cartier jewelry, holder of countless royal warrants and a tastemaker in jewelry design for over a century.</p>
              <a href="#">Read more</a>
            </div>
            <div className="blog-post">
              <h3>Art Nouveau Glass: A Symphony of Color and Form</h3>
              <p>The luminous glow and shimmering color of Art Nouveau glass are irresistible, as are the stories behind some of the movement’s most celebrated designers.</p>
              <a href="#">Read more</a>
            </div>
          </div>
          <a href="#" className="view-all">View All Posts</a>
        </section>

        <section className="testimonials-section">
          <h2>What People are Saying</h2>
          <div className="testimonial">
            <p>"This site is easy to use in making bids but also in saving items that you might be interested in, sending you info on items that you might want to view, letting you keep a list of preferred auctions and types of items."</p>
            <p>- Lynette via Trustpilot</p>
          </div>
          <div className="testimonial">
            <p>"Smooth and easy to use interface. I liked the way App is designed. Especially search feature listing 'Suggested items'. Used to have quite a few bugs and seems like the feedback is taken and it now has much better performance. Have used it for participating in live auctions."</p>
            <p>- Beta Hawk via the App Store</p>
          </div>
          <div className="testimonial">
            <p>"I have been bidding and winning through this auction website for years, and I wouldn’t think of using any other online auction service."</p>
            <p>- Michael B. via Auction Website Reviews</p>
          </div>
        </section>

        <section className="our-sellers">
          <h2>Our Sellers</h2>
          <p>Our auction website works with over 5,000 of the world’s premier auction houses specializing in art, antiques, and collectibles.</p>
          <a href="#" className="view-more">View Thousands More</a>
          <p>Interested in selling on our marketplace? <a href="#">Learn more about the auction website advantage.</a></p>
        </section>

        <section className="curated-collections">
          <h2>Start Discovering Through Our Curated Collections</h2>
          <ul>
            <li>The Hygge Edit</li>
            <li>Totally Flawsome</li>
            <li>Summer Style</li>
            <li>Heritage Bazaar</li>
            <li>Proud Artists</li>
            <li>The Grand Tour</li>
          </ul>
        </section>

        <section className="stay-informed">
          <h2>Be the First to Know</h2>
          <p>Get premier items delivered to your inbox.</p>
          <button className="cta-button">Sign Up to Stay Informed</button>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p><a href="#">Press</a></p>
              <p><a href="#">Privacy Policy</a></p>
              <p><a href="#">Sell on Auction Website</a></p>
              <p><a href="#">Subscriptions</a></p>
              <p><a href="#">Price Archive</a></p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">Instagram</a></p>
              <p><a href="#">Pinterest</a></p>
            </div>
            <div className="footer-section">
              <p>© 1986-2024 Auction Website, LLC. and participating auction houses and galleries. All Rights Reserved.</p>
              <img src="/path/to/app-store-badge.png" alt="App Store Badge" />
              <img src="/path/to/google-play-badge.png" alt="Google Play Badge" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
