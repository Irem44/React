import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function MenCloating() {
  const { datas } = useSelector((store) => store.Product);
  return (
    <div>
      <Navbar />
      <div className="text-center text-red-700 my-10 text-3xl">Giyim</div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 p-3 mt-3  ">
        {datas &&
          datas.map((data) => {
            if (data.category === "men's clothing") {
              return (
                <Card
                  id={data.id}
                  image={data.image}
                  description={data.title}
                  price={data.price}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default MenCloating;
