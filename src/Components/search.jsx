import React, { useState } from 'react';
import '../assets/stylesheets/search.scss';

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`search ${isSearchOpen ? 'open' : ''}`}>
      <form action="/search" className="search-component w-form">
        <input className="search-input w-input" maxLength="256" name="query" placeholder="Search…" type="search" id="search" required style={{ opacity: isSearchOpen ? 1 : 0 }} />
        <input type="submit" className="search-button w-button" value="" />
      </form>
      <div className="search-icon" onClick={toggleSearch}>
        <img src="https://assets-global.website-files.com/5ec03c2c67cf4824e3d00674/5ec33212c833f9fa37d83599_search.svg" width="71.5" alt="Search" className={`search-icon-open ${isSearchOpen ? 'hide' : ''}`} />
        <img src="https://assets-global.website-files.com/5ec03c2c67cf4824e3d00674/5ec488848143fd33542ab867_close.svg" width="22" alt="Close" className={`search-icon-close ${isSearchOpen ? '' : 'hide'}`} />
      </div>
    </div>
  );
};
export default Search;