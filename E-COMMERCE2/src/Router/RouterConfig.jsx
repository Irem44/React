import React from "react";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import MenCloating from "../pages/MenCloating";
import WomanCloating from "../pages/WomanCloating";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function RouterConfig() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/men" element={<MenCloating />} />
          <Route path="/women" element={<WomanCloating />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouterConfig;
