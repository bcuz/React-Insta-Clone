import React from 'react';
// import './Footer.css';

import CommentSection from '../CommentSection/CommentSection';
import PostImg from './PostImg';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return (
    <div>
      <PostHeader username={props.post.username} 
      thumbnail={props.post.thumbnailUrl}  />
      <PostImg url={props.post.imageUrl} />
      <CommentSection likes={props.post.likes} 
      comments={props.post.comments}
      timestamp={props.post.timestamp} />
    </div>
  )
}

export default PostContainer;