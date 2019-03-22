import React, { Component } from 'react';
import styled from 'styled-components';
import './SearchBar.css';

let Header = styled.header`
  border-bottom: 1px solid #eee;
`;

let Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

let Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    border-left: 1px solid #000;
    padding-left: 10px;
    font-size: 2.2rem;
  }
`;

let Form = styled.form`
  display: flex;
  align-items: center;
`

let Input = styled.input`
  text-align:center;
  border-radius: 2px;
  /* gotta be a better way than fixed width */
  width: 200px;
  background-color: #fafafa;
  padding: 3px 0;
`

let User = styled.div`
  /* gotta be a better way than fixed width */
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

class SearchBar extends Component {
  state = {
    input: ''
  }

  handleValChange = (e) => {
    this.setState({input: e.target.value})
    this.props.search(this.state.input)
  }

  render() {

    return (
      <Header>
        <Container>
          <Logo>
            <i className="fab fa-instagram fa-2x"></i> 
            <h1>Instagram</h1>
          </Logo>        
          <Form onSubmit={e => { e.preventDefault(); }}>
            <Input value={this.props.input} onChange={this.handleValChange} placeholder="Search" />
          </Form>
          <User>
            <i className="far fa-compass fa-2x"></i>
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-user fa-2x"></i>
          </User>
        </Container>
      </Header>
    )
  }
}

export default SearchBar;