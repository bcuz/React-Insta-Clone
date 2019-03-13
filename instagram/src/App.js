import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  
  render() {
  // console.log(dummyData[0]);
    return (
      <div className="App">
        <header className="App-header">
          {/* {dummyData.map()} */}

          <PostContainer />
        </header>
      </div>
    );
  }
}

export default App;
