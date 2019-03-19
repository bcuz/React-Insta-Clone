import React, { Component } from 'react';
// import './Footer.css';

class Login extends Component {

  login = (e) => {
    e.preventDefault()
    alert('hi')
  }


  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type='text' />
          <input type='password' />
        </form>
      </div>
    )
  }
}

export default Login;