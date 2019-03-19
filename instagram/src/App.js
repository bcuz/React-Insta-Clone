import React, { Component } from 'react';
import data from './data';
import PostsPage from './components/PostContainer/PostsPage';
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
    return (
      <div>
        <SearchBar search={this.search} />
        <PostsPage data={this.state.data} />
      </div>
    );
  }
}

export default App;
