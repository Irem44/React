import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import HotCoffee from "../pages/HotCoffee";
import IceCoffee from "../pages/IceCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import IceCoffeeDetails from "../pages/IceCoffeeDetails";
function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot" element={<HotCoffee />} />
        <Route path="/ice" element={<IceCoffee />} />
        <Route path="hot/details/:id" element={<CoffeeDetails />} />

        <Route path="ice/details/:id" element={<IceCoffeeDetails />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
