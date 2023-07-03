import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
export default function Button(props) {
  return (
    <>
      <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0 items</span>
      </button>
    </>
  );
}
