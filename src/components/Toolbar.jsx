import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedCategory } from '../redux/productSlice';
import './Toolbar.css';

const Toolbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.products.searchTerm);
  const selectedCategory = useSelector(state => state.products.selectedCategory);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  return (
    <div className="toolbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
        <option value="all">All</option>
        <option value="antique">Antique</option>
        <option value="collectibles">Collectibles</option>
        <option value="furniture">Furniture</option>
        <option value="kitchen">Kitchen</option>
        <option value="home decor">Home Decor</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
};

export default Toolbar;
