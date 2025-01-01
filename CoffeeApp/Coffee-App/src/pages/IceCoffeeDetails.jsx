import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function IceCoffeeDetails() {
  const { id } = useParams();
  const { iceCoffees } = useSelector((store) => store.coffee);
  return (
    <div>
      <Navbar />
      <div className="details-div">
        {iceCoffees &&
          iceCoffees.map((coffee) => {
            if (coffee.id == id) {
              return (
                <div className="p-10 ms-36 mt-20 flex details-main-div hover:scale-110 ms-40 transition-all transition-transform duration-1000  ">
                  <div className="details-img-div">
                    <img
                      src={coffee.image}
                      width={300}
                      height={300}
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div className="ms-10 mt-8 text-xl">
                    <p className="text-[#82593a]">{coffee.title}</p>
                    <div className="aciklama">{coffee.description}</div>
                    <h1 className="mt-5 mb-4 text-[#82593a]">İçindekiler</h1>
                    <div className="details-card">
                      {coffee.ingredients &&
                        coffee.ingredients.map((ing) => (
                          <ul>
                            <li>{ing}</li>
                          </ul>
                        ))}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default IceCoffeeDetails;
