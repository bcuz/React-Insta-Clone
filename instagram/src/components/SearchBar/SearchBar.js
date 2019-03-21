import React, { Component } from 'react';
import styled from 'styled-components';
import './SearchBar.css';

let Header = styled.header`
  border-bottom: 1px solid #eee;
`;

let Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

class SearchBar extends Component {

  textInput = React.createRef()

  handleSubmit = (e) => { 
    e.preventDefault()

    this.props.search(this.textInput.current.value)
  }

  render() {
    return (
      <Header>
        <Container>
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
        </Container>
      </Header>
    )
  }
}

export default SearchBar;