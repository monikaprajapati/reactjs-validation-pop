import * as React from "react";
import classes from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

type ErrorModalProps = {
  errorText: {
    title: string;
    message: string;
  };
  onClose: Function
};

const ErrorModal: React.FC<ErrorModalProps> = (props: ErrorModalProps) => {
  return (
    <>
      <div>
        <div className={classes.backdrop} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.errorText.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.errorText.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button type="button" onClick={props.onClose}>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
