import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[
        { id: "c1", name: "sushi", amount: 20 },
        { id: "c2", name: "sushi2", amount: 23 },
        { id: "c3", name: "sushi3", amount: 24 },
        { id: "c4", name: "sushi4", amount: 25 },
      ].map((eachItem) => (
        <li>{eachItem.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onclick={props.onclick}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.7</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
