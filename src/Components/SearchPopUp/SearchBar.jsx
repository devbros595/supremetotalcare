import React, { useState } from 'react';
import "./SearchBar.css";

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 100) {
      // Call API to fetch search results
      fetch(`https://example.com/api/search?q=${query}`)
       .then(response => response.json())
       .then(data => setSearchResults(data.results));
    } else {
      setSearchResults([]);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="search-popup">
      <button className="search-button" onClick={handleTogglePopup}>
        <i className="fa-solid fa-magnifying-glass fa-lg" />
      </button>
      <div className= {`search-popup-content ${isOpen? 'open' : ''}`}>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for products..."
          />
          <button type="submit">Search</button>
          {searchQuery && (
            <button className="clear-search" onClick={handleClearSearch}>
              Clear
            </button>
          )}
        </form>
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPopup;