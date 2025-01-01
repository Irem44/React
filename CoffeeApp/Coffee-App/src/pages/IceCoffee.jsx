import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function IceCoffee() {
  const { iceCoffees } = useSelector((store) => store.coffee);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 flex-wrap gap-6 p-6 mt-6 ms-16">
        {iceCoffees &&
          iceCoffees.map((coffee) => (
            <Card
              key={coffee.id}
              title={coffee.title}
              image={coffee.image}
              ingredient={coffee.ingredient}
              id={coffee.id}
            />
          ))}
      </div>
    </div>
  );
}

export default IceCoffee;
