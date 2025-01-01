import React from "react";
import FoodList from "../components/FoodList";
import { foods } from "../data/foods";

function Foods() {
  return (
    <div>
      {foods && foods.map((food) => <FoodList food={food} key={food.id} />)}
    </div>
  );
}

export default Foods;
