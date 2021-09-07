import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import ErrorBoundary from './ErrorBoundary';
import UsersContext from '../store/users-context';

// We're gonna use Context instead of below, which is provided in App.js
// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    // super calls the constructor function of the extended class--Component
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    console.log("%c componentDidMount", "color: green;");
    // http-requests are typically sent here
    this.setState({ filteredUsers: this.context.users})
  }

  // used in place of useEffect
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => {
          return user.name.includes(this.state.searchTerm);
        })
      })
    }
  }

  // adding a method to our class
  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value});
  }

  // the render method is built-in to React
  render() {
    return (
      <Fragment>
        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// component-function style 
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
