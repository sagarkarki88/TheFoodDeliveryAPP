import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/* ******************App Components************************* */
import Header from "./components/Layout/Header";
import MealsSummaryBanner from "./components/Meals/MealsSummaryBanner";
import AvailableMeal from "./components/Meals/AvailableMeal";
import Cart from "./components/Cart/Cart";

/* *************************Context */
import CartProvider from "./store/CartProvider";

function App() {
  const [backdrop, setBackdrop] = useState(false);
  const showCartModal = () => {
    setBackdrop(!backdrop);
  };
  return (
    <CartProvider>
      {backdrop && <Cart onclick={showCartModal} />}

      <Header onclick={showCartModal} />
      <MealsSummaryBanner />
      <AvailableMeal />
    </CartProvider>
  );
}

export default App;
