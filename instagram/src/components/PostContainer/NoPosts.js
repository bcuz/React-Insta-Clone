import React from 'react';
import styled from 'styled-components';

// import './Footer.css';

let Heading = styled.h3`
  text-align: center;
  margin-top: 20px;
`;

const NoPosts = props => {
  return (
    <div>
      <Heading>No posts found</Heading>
    </div>
  )
}

export default NoPosts;