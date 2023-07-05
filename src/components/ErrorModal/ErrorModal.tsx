import * as React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

type ErrorModalProps = {
  errorText: {
    title: string;
    message: string;
  };
  onClose: Function;
};

const Backdrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props: any) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorText.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorText.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onClick}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal: React.FC<ErrorModalProps> = (props: ErrorModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay errorText={props.errorText} onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default ErrorModal;
