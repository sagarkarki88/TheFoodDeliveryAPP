import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartSateReducerFn = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex((each) => {
      return each.id === action.item.id;
    });

    if (existingItemIndex !== -1) {
      const updatedItems = state.items.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, amount: item.amount + action.item.amount };
        } else return item;
      });
      const updateAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updateAmount };
    } else {
      const updatedItems = state.items.concat(action.item);
      const updateAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updateAmount };
    }
  }

  if (action.type === "REMOVE") {
    const idItem = state.items.filter((each) => {
      if (each.id === action.id) {
        return each;
      }
    });
    const updatedItems = state.items.filter((each) => {
      if (each.id != action.id) {
        return each;
      } else return;
    });
    const isItemsEmpty = state.items.reduce((current, item) => {
      return current + item.amount;
    }, -1);
    let updatedAmount = 0;
    if (isItemsEmpty)
      updatedAmount = state.totalAmount - idItem[0].price * idItem[0].amount;

    return { items: updatedItems, totalAmount: updatedAmount };
  }

  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartSateReducerFn,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
