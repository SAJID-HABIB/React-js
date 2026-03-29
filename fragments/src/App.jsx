import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  let foodItems = ["dal", "roti", "sabzi", "salad", "milk", "makhan"];
  // let foodItems = [];
  return (
    <>
      <h1>Food item</h1>
      {foodItems.length === 0 && <h3>i am stil hungry</h3>}
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
