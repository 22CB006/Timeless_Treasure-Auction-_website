// src/components/CreateAuction.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAuction } from '../../redux/auctionSlice.js';
import './Admin.css';

const CreateAuction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAuction({ title, description, startingBid }));
    setTitle('');
    setDescription('');
    setStartingBid('');
  };

  return (
    <div className="create-auction">
      <h2>Create Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Starting Bid:</label>
        <input
          type="number"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
        />
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
