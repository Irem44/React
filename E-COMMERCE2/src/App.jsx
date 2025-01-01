import { useEffect, useState } from "react";
import "./App.css";
import RouterConfig from "./Router/RouterConfig";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "./Redux/ProductsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <RouterConfig />
    </div>
  );
}

export default App;
