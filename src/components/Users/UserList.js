import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    props.users.length > 0 && (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.name}>
              {user.name} ({user.age} Years Old)
            </li>
          ))}
        </ul>
      </Card>
    )
  );
};

export default UserList;
