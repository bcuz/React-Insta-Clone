import React, { Component } from 'react';
import styled from 'styled-components';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';

let Container = styled.div`
  padding: 10px
`;
let Likes = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
let Date = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  color: #787474;
`;
let Input = styled.input`
  border: none;
  padding: 10px 0;
  font-size: 1.8rem;
  width: 100%;

  &:focus {
    outline: none;  
  }
`;

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    input: '',
    likes: this.props.likes,
  }

  // dont think you need index here.
  addNewComment = (e) => {
    e.preventDefault()

    let user = localStorage.getItem("username");    

    this.setState(prevState => {
      let newComment = {username: user, text: this.state.input}

      return {
        comments: [...prevState.comments, newComment], input: ''
      }
    })
  }

  handleLikeClick = (e) => {
    this.setState(prevState => {
      return {likes : prevState.likes + 1}
    })
  }

  handleValChange = (e) => {
    this.setState({input: e.target.value})
  }
  
  render() {
    let sliceTo = this.props.timestamp.indexOf("201")
    // could be better, not exactly like insta
    let dateFormatted = this.props.timestamp.slice(0, sliceTo)
  
    return (    
      <Container>
        {/* maybe make into separate component */}
        <i onClick={this.handleLikeClick} className="far fa-heart fa-2x"></i>
        <i className="far fa-comment fa-2x"></i>
        <Likes>{this.state.likes} likes</Likes>
        {this.state.comments.map(comment => <Comment comment={comment} /> )}
        <Date>{dateFormatted}</Date>
        <form onSubmit={this.addNewComment}>
          <Input onChange={this.handleValChange}
          value={this.state.input} 
          className="addComment" 
          placeholder="Add a comment..." />
        </form>
      </Container>
  )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection;