import React from 'react';
// import './Footer.css';

import CommentSection from '../CommentSection/CommentSection';
import PostImg from './PostImg';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return (
    <div>
      <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl}  />
      <PostImg url={props.post.imageUrl} />
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default PostContainer;