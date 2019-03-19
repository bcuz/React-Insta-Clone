import React from 'react';


const withAuthenticate = WrappedComponent => class extends React.Component {
  render() {
    return <WrappedComponent />;
  }
}


export default withAuthenticate