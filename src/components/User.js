import { Component } from 'react';

import classes from './User.module.css';

// class-based component style
class User extends Component {
  // this will execute when we click on the "Hide Users" button to hide users in Users.js, which conditionally renders User components in here
  componentWillUnmount() {
    console.log('User will unmount!');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// function-component style
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
