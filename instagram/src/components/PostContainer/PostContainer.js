import React from 'react';
// import './Footer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import PostImg from './PostImg';
import PostHeader from './PostHeader';

let Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  border: 1px solid #eee;
`;

const PostContainer = props => {
  return (
    <Container>
      <PostHeader username={props.post.username} 
      thumbnail={props.post.thumbnailUrl}  />
      <PostImg url={props.post.imageUrl} />
      <CommentSection likes={props.post.likes} 
      comments={props.post.comments}
      timestamp={props.post.timestamp} />
    </Container>
  )
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    likes: PropTypes.number,
  })
}

export default PostContainer;