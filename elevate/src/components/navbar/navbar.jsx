import React, { useState } from 'react';
import './navbar.css';


function Navbar({ categories, onCategoryChange, onSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    onSearchChange(value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="navbar">
      <select className="dropdown" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <div className="searchBar">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
        <button className="searchButton">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <select className="languageDropdown" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
      </select>
      <a href="/cart" className="link">Cart</a>
      <a href="/account" className="link">My Account</a>
    </div>
  );
}

export default Navbar;
