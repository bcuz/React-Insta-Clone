import React, { Component } from 'react';
import data from './data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  
  render() {
    return (
      <div>
          <SearchBar />
          {this.state.data.map(post => <PostContainer post={post} />)}        
      </div>
    );
  }
}

export default App;
