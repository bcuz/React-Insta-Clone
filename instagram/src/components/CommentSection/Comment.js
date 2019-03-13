import React from 'react';
// import './Footer.css';

const Comment = props => {
  return (
    <div>
      <span>{props.comment.username}</span>
      <span>{props.comment.text}</span>
    </div>
  )
}

export default Comment;