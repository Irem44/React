import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Diziler from "../pages/Diziler";
import Filmler from "../pages/Filmler";
import MovieDetails from "../pages/MovieDetails";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diziler" element={<Diziler />} />
        <Route path="/filmler" element={<Filmler />} />
        <Route path="/detay/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
