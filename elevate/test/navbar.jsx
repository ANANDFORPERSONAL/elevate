import React, { useState } from 'react';
import './navbar.css';

function Navbar({ categories, onSearchChange, onCategoryChange }) {
  const [language, setLanguage] = useState('English');

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">All Category</button>
        <div className="dropdown-content">
          <a href="#" onClick={() => handleCategoryChange('all')}>All</a>
          {categories.map((category) => (
            <a key={category} href="#" onClick={() => handleCategoryChange(category)}>
              {category}
            </a>
          ))}
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here..." onChange={handleSearchChange} />
        <button className="search-button">Search</button>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setLanguage(language === 'English' ? 'Spanish' : 'English')}>{language}</button>
        <div className="dropdown-content">
          <a href="#" onClick={() => setLanguage('English')}>English</a>
          <a href="#" onClick={() => setLanguage('Spanish')}>Spanish</a>
        </div>
      </div>
      <div className="links">
        <a href="#" className="link">Cart</a>
        <a href="#" className="link">My Account</a>
      </div>
    </div>
  );
}

export default Navbar;
