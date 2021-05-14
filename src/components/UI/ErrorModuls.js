import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModule.module.css";

const ErrorModule = (props) => {
  
  return (
    <div>
      <div className={classes.backdrop} onClick={() => props.onError(false)}>
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
      </div>
    </div>
  );
};
export default ErrorModule;
