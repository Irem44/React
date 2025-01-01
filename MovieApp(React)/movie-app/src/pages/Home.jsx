import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="welcome ">
        <Welcome />
      </div>
    </div>
  );
}

export default Home;
