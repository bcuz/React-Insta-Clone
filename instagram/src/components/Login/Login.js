import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    username: ''
  }

  login = (e) => {
    e.preventDefault()

    localStorage.setItem("username", this.state.username);

    window.location.reload();

  }

  changeInputHandler = e => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div>
        {/* <h2>Instagram</h2> */}
        <form className='login' onSubmit={this.login}>
          <input placeholder="Username" onChange={this.changeInputHandler} type='text' />
          <input placeholder="Password" type='password' />
          <input type='submit' value='Log in'/>
        </form>
      </div>
    )
  }
}

export default Login;