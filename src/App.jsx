import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/* ******************App Components************************* */
import Header from "./components/Layout/Header";
import MealsSummaryBanner from "./components/Meals/MealsSummaryBanner";
import AvailableMeal from "./components/Meals/AvailableMeal";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummaryBanner />
      <AvailableMeal />
    </Fragment>
  );
}

export default App;
