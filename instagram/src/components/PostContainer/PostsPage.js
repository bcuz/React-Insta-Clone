import React from 'react';
// import './Footer.css';

import PostContainer from './PostContainer';

const PostsPage = props => {
  return (
    <div>
      {props.data.map(post => <PostContainer post={post} />)}        
    </div>
  )
}

export default PostsPage;