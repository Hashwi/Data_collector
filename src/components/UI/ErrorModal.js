import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={ classes.backdrop} onClick = {props.onConfirm}/>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
            {/* {props.errorMessage && (
        <p className={classes.errorMessage} >{props.errorMessage} </p>
      )} */}
          </div>
          <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
  );
}
