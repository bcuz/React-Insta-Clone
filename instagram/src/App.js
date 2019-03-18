import React, { Component } from 'react';
import data from './data';
import PostContainer from './components/PostContainer/PostContainer';
import NoPosts from './components/PostContainer/NoPosts';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // input: ''
      
    };
  }

  componentDidMount() {
    this.setState({data})
  }

  search = inputText => { 
    this.setState( prevState => {
      return { 
        data: prevState.data.filter(post => {          
          // playhearthstone          
          return post.username === inputText
        })
      }
    }) 
  }
  
  render() {
    let posts;
    let results = this.state.data

    if (results.length) {
      posts = results.map(post => <PostContainer post={post} />)
    } else {
      posts = <NoPosts />
    }

    return (
      <div>
          <SearchBar input={this.state.input} search={this.search} />
          {posts}        
      </div>
    );
  }
}

export default App;
