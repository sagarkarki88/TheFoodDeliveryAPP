import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

import CartItem from "./CartItem";

import { useContext } from "react";

import CartContext from "../../store/Cart-context";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const isCartEmpty = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const onAddcartHandler = (item) => {
    cartCtx.addItem(item);
  };

  const onRemoveCartHandler = (id) => {};
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((eachItem) => (
        <CartItem
          key={eachItem.id}
          name={eachItem.name}
          price={eachItem.price}
          amount={eachItem.amount}
          onAdd={onAddcartHandler.bind(null, eachItem)}
          onRemove={onRemoveCartHandler.bind(null, eachItem.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onclick={props.onclick}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        {isCartEmpty !== 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
