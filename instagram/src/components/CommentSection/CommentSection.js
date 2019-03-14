import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentSection = props => {
  let sliceTo = props.timestamp.indexOf("201")
  // could be better, not exactly like insta
  let dateFormatted = props.timestamp.slice(0, sliceTo)

  return (    
    <div>
      {/* maybe make into separate component */}
      <i className="far fa-heart fa-2x"></i>
      <i className="far fa-comment fa-2x"></i>
      <div className='likes'>{props.likes} likes</div>
      {props.comments.map(comment => <Comment comment={comment} /> )}
      <div>{dateFormatted}</div>
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection;