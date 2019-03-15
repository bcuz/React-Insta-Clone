import React from 'react';
// import './Footer.css';

const PostHeader = props => {
  return (
    <div className='header'>
      <img className='thumb' src={props.thumbnail} />
      <span className='username'>{props.username}</span>
    </div>
  )
}

export default PostHeader;