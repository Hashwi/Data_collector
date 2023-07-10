import React from 'react';
import classes from './ErrorModal.module.css'


export default function ErrorModal(props) {

  return (
    <div >
       {props.errorMessage && (
        <p className={classes.errorMessage} >{props.errorMessage} </p>
      )}
    </div>
  )
}
