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
      input: ''
      
    };
  }

  componentDidMount() {
    this.setState({data})
  }

  handleValChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    
    // this.state.data.forEach(p => alert(p.username))

    this.setState( prevState => {
      return { 
        data: prevState.data.filter(post => {          
          // playhearthstone
          
          return post.username === prevState.input
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
          <SearchBar input={this.state.input} handleValChange={this.handleValChange} handleSubmit={this.handleSubmit} />
          {posts}        
      </div>
    );
  }
}

export default App;
