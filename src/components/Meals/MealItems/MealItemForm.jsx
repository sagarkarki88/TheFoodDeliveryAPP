import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.jsx";
export default function MenuItemForm(props) {
  return (
    <>
      <form className={classes.form}>
        <Input
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
