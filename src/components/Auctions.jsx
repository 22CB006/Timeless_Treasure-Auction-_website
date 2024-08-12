import React, { useState } from 'react';
import { auctionsData } from '../constants/constants';
import './Auctions.css';

const Auctions = () => {
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const itemsPerPage = 6;

  const handleAuctionClick = (auction) => {
    setSelectedAuction(auction);
  };

  const handleCloseDetails = () => {
    setSelectedAuction(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFavorite = (auction) => {
    setFavorites((prevFavorites) => 
      prevFavorites.includes(auction.id)
        ? prevFavorites.filter((id) => id !== auction.id)
        : [...prevFavorites, auction.id]
    );
  };

  const filteredAuctions = auctionsData
    .filter(auction => 
      auction.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'date') return new Date(a.date) - new Date(b.date);
      if (sortOption === 'place') return a.place.localeCompare(b.place);
      return a.type.localeCompare(b.type);
    });

  const totalPages = Math.ceil(filteredAuctions.length / itemsPerPage);
  const currentAuctions = filteredAuctions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="auctions-page">
      {/* Page header section */}
      <div className="auctions-header-section">
        <h1>Join the Auction Adventure</h1>
        <button className="btn-start-bidding">Start Bidding</button>
        <div className="auction-text-section">
          <p>Discover Unique Antiques Today!</p>
          <p>Join Our Thriving Community Now!</p>
          <p>Bid on Treasures from Home!</p>
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="auctions-controls">
        <input
          type="text"
          placeholder="Search Auctions..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <select value={sortOption} onChange={handleSortChange} className="sort-select">
          <option value="date">Sort by Date</option>
          <option value="place">Sort by Place</option>
          <option value="type">Sort by Type</option>
        </select>
      </div>

      {/* Auction details section */}
      <div className="auctions-content">
        <div className="auctions-header">Upcoming Auctions</div>
        <div className="auctions-list">
          {currentAuctions.length === 0 ? (
            <div className="auctions-list-empty">No auctions available</div>
          ) : (
            currentAuctions.map((auction) => (
              <div
                key={auction.id}
                className="auction-item"
                onClick={() => handleAuctionClick(auction)}
              >
                <img src={auction.imageUrl} alt={auction.title} className="auction-image" />
                <h3>{auction.title}</h3>
                <p>Date: {auction.date}</p>
                <p>Place: {auction.place}</p>
                <p>Type: {auction.type}</p>
                <button className="btn-bid">Bid Now</button>
                <button 
                  className={`btn-favorite ${favorites.includes(auction.id) ? 'favorited' : ''}`}
                  onClick={() => handleFavorite(auction)}
                >
                  {favorites.includes(auction.id) ? 'Unfavorite' : 'Favorite'}
                </button>
                <div className="countdown-timer">
                  <p>Ends in: <span>{auction.countdown}</span></p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i+1}
              onClick={() => handlePageChange(i + 1)}
              className={`pagination-btn ${i+1 === currentPage ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {selectedAuction && (
        <div className="auction-details">
          <button onClick={handleCloseDetails} className="close-details">Close</button>
          <h3>{selectedAuction.title}</h3>
          <p><strong>Place:</strong> {selectedAuction.place}</p>
          <p><strong>Type:</strong> {selectedAuction.type}</p>
          <p><strong>Date:</strong> {selectedAuction.date}</p>
          <p><strong>Description:</strong> {selectedAuction.description}</p>
          <p><strong>Estimate:</strong> {selectedAuction.estimate}</p>
          <p><strong>Result:</strong> {selectedAuction.result}</p>
          <p><strong>Inclusive:</strong> {selectedAuction.inclusive}</p>
        </div>
      )}
    </div>
  );
};

export default Auctions;
