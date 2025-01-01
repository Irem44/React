import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotCoffee } from "../Redux/CoffeeSlice";
import Card from "../components/Card";

function HotCoffee() {
  const dispatch = useDispatch();
  const { hotCoffees } = useSelector((store) => store.coffee);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 flex-wrap gap-6 p-6 mt-6 ms-16">
        {hotCoffees &&
          hotCoffees.map((coffee) => (
            <Card
              key={coffee.id}
              title={coffee.title}
              image={coffee.image}
              ingredients={coffee.ingredients}
              id={coffee.id}
            />
          ))}
      </div>
    </div>
  );
}

export default HotCoffee;
