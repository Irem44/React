import React from "react";
import { useSelector } from "react-redux";

function WeatherCity({ name, description, degree }) {
  return (
    <div>
      {/* content */}
      <div className="flex-column mt-10 text-[#fff] space-y-5">
        <h1 className="text-3xl ">{name}</h1>
        <h1 className="text-2xl">{description}</h1>
        <p className="text-2xl">{degree} C°</p>
      </div>
    </div>
  );
}

export default WeatherCity;
