import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Electronics() {
  /* data retrieval */
  const { datas } = useSelector((store) => store.Product);

  return (
    <div>
      <Navbar />
      <div className="text-center text-red-700 my-10 text-3xl">
        Elektronik Cihazlar
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 p-3 mt-3  ">
        {datas &&
          datas.map((data) => {
            if (data.category === "electronics") {
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

export default Electronics;
