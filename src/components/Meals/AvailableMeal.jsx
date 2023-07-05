const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";
import classes from "./AvailableMeal.module.css";
export default function AvailableMeal() {
  return (
    <section className={classes.meals}>
      <Card>
        {DUMMY_MEALS.map((each) => (
          <ul>
            <MealItems id={each.id} key={each.id} MenuItem={each} />
          </ul>
        ))}
      </Card>
    </section>
  );
}
