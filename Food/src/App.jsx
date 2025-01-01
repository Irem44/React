import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Drinks from "./pages/Drinks";

import "./App.css";
import Header from "./components/Header";
import FoodsDetails from "./pages/FoodsDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods-details/:id" element={<FoodsDetails />} />

        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
}

export default App;
