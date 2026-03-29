const FoodItems = () => {
  let foodItems = ["dal", "roti", "sabzi", "salad", "milk", "makhan"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item" aria-current="true">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
