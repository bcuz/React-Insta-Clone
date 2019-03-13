import React, { Component } from 'react';
import data from './data';
import PostContainer from './components/PostContainer/PostContainer';

// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data.map(post => <PostContainer post={post} />)}
          
        </header>
      </div>
    );
  }
}

export default App;
