import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

export default function Button(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  console.log(numberOfCartItem);
  return (
    <>
      <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
      </button>
    </>
  );
}
