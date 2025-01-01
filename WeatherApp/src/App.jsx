import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", paddingLeft: "250px" }}
    >
      <Weather />
    </div>
  );
}

export default App;
