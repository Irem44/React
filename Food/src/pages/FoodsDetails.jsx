import React from "react";
import { foods } from "../data/foods";
import FoodList from "../components/FoodList";
import { useParams } from "react-router-dom";

function FoodsDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Yemekler</h2>
      <hr />
      {foods &&
        foods.map((food) => {
          if (id == food.id) {
            return <FoodList food={food} key={food.id} />;
          }
        })}
    </div>
  );
}

export default FoodsDetails;
