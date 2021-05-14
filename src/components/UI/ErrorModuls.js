import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModule.module.css";
const BackDropModule = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => props.onError(false)}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={() => props.onError(false)}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModule = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDropModule onError={() => props.onError(false)}></BackDropModule>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onError={() => props.onError(false)}
        ></ModalOverlay>,
        document.getElementById("modaloverlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModule;
