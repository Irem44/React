import { useEffect, useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotCoffee, getAllIceCoffee } from "./Redux/CoffeeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHotCoffee());
    dispatch(getAllIceCoffee());
  }, []);

  return (
    <div>
      <RouterConfig />
    </div>
  );
}

export default App;
