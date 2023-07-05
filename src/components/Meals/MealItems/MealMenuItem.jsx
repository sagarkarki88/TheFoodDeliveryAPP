import classes from "./MealMenuItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-context";

import { useContext } from "react";

export default function MealMenuItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const collectInputs = (amount) => {
    const inputData = {
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    };
    cartCtx.addItem(inputData);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm collectInputData={collectInputs} id={props.id} />
      </div>
    </li>
  );
}
