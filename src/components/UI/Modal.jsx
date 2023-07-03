import classes from "./Modal.module.css";
import reactDom from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclick}></div>;
};
const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onclick={props.onclick} />,
        portalElement
      )}
      {reactDom.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalElement
      )}
    </Fragment>
  );
}
