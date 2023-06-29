import MealMenuItem from "./MealMenuItem.jsx";
export default function MealItem(props) {
  return (
    <>
      <MealMenuItem
        name={props.MenuItem.name}
        description={props.MenuItem.description}
        price={props.MenuItem.price}
      />
    </>
  );
}
