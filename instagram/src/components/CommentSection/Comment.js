import React from 'react';
import styled from 'styled-components';
// import './Footer.css';

import Username from '../../styles/resusable';

const User = styled(Username)`
  /* so theres no margin in the postheader version */
  margin-right: 5px;
`;

let UserComment = styled.p`
  display: inline-block;
  margin-bottom: 5px;
`;

const Comment = props => {
  return (
    <div>
      <User>{props.comment.username}</User>
      <UserComment>{props.comment.text}</UserComment>
    </div>
  )
}

export default Comment;