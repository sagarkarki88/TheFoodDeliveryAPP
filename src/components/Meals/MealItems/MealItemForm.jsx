import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.jsx";
import { useRef, useContext } from "react";

export default function MenuItemForm(props) {
  const inputref = useRef();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const inputqty = inputref.current.value;
    const enteredNumber = +inputqty;

    props.collectInputData(enteredNumber);
  };
  return (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <Input
          ref={inputref}
          id={props.id}
          label="Amount"
          input={{
            type: "number",
            id: "amount_" + props.id,
            min: "1",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </>
  );
}
