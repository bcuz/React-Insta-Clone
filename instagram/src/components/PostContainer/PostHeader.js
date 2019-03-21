import React from 'react';
// import './Footer.css';

import Username from '../../styles/resusable';

const PostHeader = props => {
  return (
    <div className='header'>
      <img className='thumb' src={props.thumbnail} />
      <Username>{props.username}</Username>
    </div>
  )
}

export default PostHeader;