import React from 'react';
// import './Footer.css';

const Comment = props => {
  return (
    <div>
      {props.comment.text}
    </div>
  )
}

export default Comment;