import React, { Component } from 'react';
import data from './data';
import PostContainer from './components/PostContainer/PostContainer';
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
          {this.state.data.map(post => <PostContainer post={post} />)}        
      </div>
    );
  }
}

export default App;
