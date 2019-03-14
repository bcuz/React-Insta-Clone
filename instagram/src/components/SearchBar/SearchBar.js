import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <i className="fab fa-instagram fa-2x"></i> 
          <h1>Instagram</h1>
        </div>
        <input className='search' type="text" placeholder="Search" />
        <div className="user">
          <i className="far fa-compass fa-2x"></i>
          <i className="far fa-heart fa-2x"></i>
          <i className="far fa-user fa-2x"></i>
        </div>
      </div>
    </header>
  )
}

export default SearchBar;