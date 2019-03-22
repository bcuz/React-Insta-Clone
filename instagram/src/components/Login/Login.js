import React, { Component } from 'react';
import styled from 'styled-components';

let Form = styled.form`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
let Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-top: 10px;
  padding: 5px;

  &[type=submit] {
    border: none;
    background-color: #3897f0;
    color: #fff;
    font-weight: bold;

  }
`;

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
        <Form onSubmit={this.login}>
          <Input placeholder="Username" onChange={this.changeInputHandler} />
          <Input placeholder="Password" type='password' />
          <Input type='submit' value='Log in'/>
        </Form>
      </div>
    )
  }
}

export default Login;