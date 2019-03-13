import React from 'react';
// import './Footer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div>
      <img src={props.post.imageUrl} />
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default PostContainer;