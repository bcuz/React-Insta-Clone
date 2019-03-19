import React from 'react';


const withAuthenticate = PostsPage => LoginPage => class extends React.Component {
  state = {
    loggedIn: false
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