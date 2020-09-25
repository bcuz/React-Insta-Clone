import React from 'react';

const withAuthenticate = PostsPage => LoginPage => class extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    let user = localStorage.getItem("username");

    if (user === 'adam') {
      this.setState({ loggedIn: true })
    }
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <PostsPage /> : <LoginPage />}
      </div>
    );
  }
}


export default withAuthenticate