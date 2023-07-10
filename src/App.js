import React, { useState } from 'react';
import classes from './components/App.module.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userData) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, userData]; 
    });
  };

  return (
    <div>
      <h1 className={classes.h1}>Data Collector</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} /> 
    </div>
  );
}

export default App;
