import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    console.log('%c Error from ErrorBoundary: ', 'color: red; font-weight: 800;', error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p style={{backgroundColor:"white",color:"red",fontWeight:800,fontSize:"1rem"}}>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;