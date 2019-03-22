import React from 'react';
// import './Footer.css';
import styled from 'styled-components';
import Username from '../../styles/resusable';

let Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

let UserThumbnail = styled.img`
  border-radius: 100%;
  width: 50px;
  margin-right: 10px;
`;

const PostHeader = props => {
  return (
    <Header>
      <UserThumbnail className='thumb' src={props.thumbnail} />
      <Username>{props.username}</Username>
    </Header>
  )
}

export default PostHeader;