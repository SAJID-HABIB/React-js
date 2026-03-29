import { useState } from "react";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["dal", "roti", "milk", "makhan"];

  return (
    <>
      <h1 className="food-heading">Food item</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </>
  );
}

export default App;
