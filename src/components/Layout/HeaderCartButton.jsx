import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
export default function Button() {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0 items</span>
      </button>
    </>
  );
}
