// src/components/AdminDashboard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Admin.css';

const AdminDashboard = () => {
  const auctions = useSelector((state) => state.auctions.list);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Manage auctions, users, and more from here.</p>
      <div className="dashboard-content">
        <div className="dashboard-item">
          <h2>Current Auctions</h2>
          {auctions.length === 0 ? (
            <p>No auctions available.</p>
          ) : (
            <ul>
              {auctions.map((auction, index) => (
                <li key={index}>
                  {auction.title} - {auction.description} - ${auction.startingBid}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
