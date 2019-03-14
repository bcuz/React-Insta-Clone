import React from 'react';
import './Comment.css';

import Comment from './Comment';

const CommentSection = props => {
  let sliceTo = props.timestamp.indexOf("201")
  // could be better, not exactly like insta
  let dateFormatted = props.timestamp.slice(0, sliceTo)

  return (    
    <div>
      {/* maybe make into separate component */}
      <div>{props.likes} likes</div>
      {props.comments.map(comment => <Comment comment={comment} /> )}
      <div>{dateFormatted}</div>
    </div>
  )
}

export default CommentSection;