import React, { useState } from 'react';
import { auctionsData } from '../constants/constants';
import './Auctions.css';

const Auctions = () => {
  const [selectedAuction, setSelectedAuction] = useState(null);

  const handleAuctionClick = (auction) => {
    setSelectedAuction(auction);
  };

  const handleCloseDetails = () => {
    setSelectedAuction(null);
  };

  return (
    <div className="auctions-page">
      <div className="auctions-content">
        <div className="auctions-header">Upcoming Auctions</div>
        <div className="auctions-list">
          {auctionsData.length === 0 ? (
            <div className="auctions-list-empty">No auctions available</div>
          ) : (
            auctionsData.map((auction) => (
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
              </div>
            ))
          )}
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
