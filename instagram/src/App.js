import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';

import './App.css';

let ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends Component {  
  
  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
