import React, { Component } from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    input: ''
  }

  // dont think you need index here.
  addNewComment = (e) => {
    e.preventDefault()

    this.setState(prevState => {
      let newComment = {username: "bob", text: this.state.input}

      return {
        comments: [...prevState.comments, newComment], input: ''
      }
    })
  }

  changeHandler = (e) => {
    this.setState({input: e.target.value})
  }
  
  render() {
    let sliceTo = this.props.timestamp.indexOf("201")
    // could be better, not exactly like insta
    let dateFormatted = this.props.timestamp.slice(0, sliceTo)
  
    return (    
      <div className="comments">
        {/* maybe make into separate component */}
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-comment fa-2x"></i>
        <div className='likes'>{this.props.likes} likes</div>
        {this.state.comments.map(comment => <Comment comment={comment} /> )}
        <div className='date'>{dateFormatted}</div>
        <form onSubmit={this.addNewComment}>
          <input onChange={this.changeHandler}
          value={this.state.input} 
          className="addComment" 
          type="text" 
          placeholder="Add a comment..." />
        </form>
      </div>
  )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection;