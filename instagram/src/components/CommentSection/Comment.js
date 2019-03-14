import React from 'react';
// import './Footer.css';

const Comment = props => {
  return (
    <div>
      <span className="username">{props.comment.username}</span>
      <p>{props.comment.text}</p>
    </div>
  )
}

export default Comment;