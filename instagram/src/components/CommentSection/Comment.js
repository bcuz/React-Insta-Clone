import React from 'react';
// import './Footer.css';

import Username from '../../styles/resusable';

const Comment = props => {
  return (
    <div>
      <Username>{props.comment.username}</Username>
      <p>{props.comment.text}</p>
    </div>
  )
}

export default Comment;