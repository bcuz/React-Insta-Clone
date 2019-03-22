import React, { Component } from 'react';
// import './Footer.css';
import data from '../../data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import NoPosts from './NoPosts';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],      
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
          return post.username.includes(inputText)
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
          <SearchBar search={this.search} />
          {posts}        
      </div>
    );
  }
}

export default PostsPage;