import React from 'react';
// import './Footer.css';

const PostHeader = props => {
  return (
    <div>
      <img src={props.thumbnail} />
      {props.username}
    </div>
  )
}

export default PostHeader;