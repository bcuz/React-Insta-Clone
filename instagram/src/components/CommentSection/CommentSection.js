import React from 'react';
// import './Footer.css';

import Comment from './Comment';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => <Comment comment={comment} /> )}
    </div>
  )
}

export default CommentSection;