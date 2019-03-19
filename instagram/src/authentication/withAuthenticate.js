import React from 'react';


const withAuthenticate = WrappedComponent => class extends React.Component {
  render() {
    return <WrappedComponent data={this.props.data} />;
  }
}


export default withAuthenticate