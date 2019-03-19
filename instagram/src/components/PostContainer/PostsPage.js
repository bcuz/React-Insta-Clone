import React, { Component } from 'react';
// import './Footer.css';
import data from '../../data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {
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
    )
  }
}

export default PostsPage;