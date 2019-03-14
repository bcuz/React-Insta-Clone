import React from 'react';
// import './Footer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostImg from './PostImg';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return (
    <div>
      <PostHeader username={props.post.username} 
      thumbnail={props.post.thumbnailUrl}  />
      <PostImg url={props.post.imageUrl} />
      <CommentSection likes={props.post.likes} 
      comments={props.post.comments}
      timestamp={props.post.timestamp} />
    </div>
  )
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    likes: PropTypes.number,
  })
}

export default PostContainer;