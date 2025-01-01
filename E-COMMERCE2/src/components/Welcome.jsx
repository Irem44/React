import React from "react";
import bg from "../images/bg.webp";

function Welcome() {
  return (
    <div className="header">
      <img src={bg} className="w-full " />
      <div></div>
      <h1>Welcome My Commerce</h1>
    </div>
  );
}

export default Welcome;
