import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/* ******************App Components************************* */
import Header from "./components/Layout/Header";
import MealsSummaryBanner from "./components/Meals/MealsSummaryBanner";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummaryBanner />
    </Fragment>
  );
}

export default App;
