import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  textInput = React.createRef()

  handleSubmit = (e) => { 
    e.preventDefault()

    this.props.search(this.textInput.current.value)
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <i className="fab fa-instagram fa-2x"></i> 
            <h1>Instagram</h1>
          </div>        
          <form onSubmit={this.handleSubmit}>
            <input ref={this.textInput} className='search' type="text" placeholder="Search" />
          </form>
          <div className="user">
            <i className="far fa-compass fa-2x"></i>
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-user fa-2x"></i>
          </div>
        </div>
      </header>
    )
  }
}

export default SearchBar;