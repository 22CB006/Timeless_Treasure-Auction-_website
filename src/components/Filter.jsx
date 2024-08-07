// Filter.jsx
import React from 'react';

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="filter">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
        <li>
          <button
            className={selectedCategory === '' ? 'selected' : ''}
            onClick={() => onSelectCategory('')}
          >
            All
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
