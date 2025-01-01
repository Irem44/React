import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../Redux/WeatherSlice";
import WeatherCity from "./WeatherCity";

function Weather() {
  const [input, setInput] = useState("");
  const [elements, setElements] = useState(null);
  const dispatch = useDispatch();
  const { name, description, degree } = useSelector((store) => store.weather);

  return (
    <div className="main_div mt-24  ">
      {/* header */}
      <div className="text-center text-3xl text-[#fff]">
        <h1>Weather App</h1>
      </div>

      {/* input */}

      <div>
        <div className="flex-row input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="bir şehir giriniz"
            className="text-white"
          ></input>
          <button
            onClick={() => {
              if (input == "") {
                alert("Lütfen şehir giriniz");
                setElements("");
              } else {
                dispatch(getWeather(input));
                setElements(name);
              }
            }}
          >
            Ara
          </button>
        </div>
        <div>
          {elements && (
            <WeatherCity
              name={name}
              description={description}
              degree={degree}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
