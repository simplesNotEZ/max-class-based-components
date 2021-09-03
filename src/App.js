import UserFinder from './components/UserFinder';

import classes from './components/UserFinder.module.css';

function App() {
  return (
    <div className={classes.finder}>
      <UserFinder />
    </div>
  );
}

export default App;
