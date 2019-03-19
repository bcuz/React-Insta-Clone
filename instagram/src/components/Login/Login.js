import React, { Component } from 'react';
// import './Footer.css';

class Login extends Component {
  state = {
    username: ''
  }

  login = (e) => {
    e.preventDefault()
    let user = localStorage.getItem("username");
    if (user === null) {
      localStorage.setItem("username", this.state.username);
    }

    window.location.reload();

  }

  changeInputHandler = e => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input onChange={this.changeInputHandler} type='text' />
          <input type='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Login;