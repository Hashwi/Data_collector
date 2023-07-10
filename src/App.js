import React from 'react';
import AddUser from './components/Users/AddUser'
import classes from './components/App.module.css'


function App() {
  return (
    <div>
      <h1 className={classes.h1}>Data Collector</h1>
      <AddUser/>
    </div>
  );
}

export default App;
