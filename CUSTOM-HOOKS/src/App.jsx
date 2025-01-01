import { useState } from "react";

import "./App.css";
import useCounter from "./hooks/useCounter";
import usecopy from "./hooks/usecopy";
import useChange from "./hooks/useChange";

function App() {
  const { change, openClose } = useChange();

  return (
    <div>
      {change && (
        <div
          style={{ height: "200px", width: "200px", background: "blue" }}
        ></div>
      )}
      <button onClick={openClose}>Değiştir</button>
    </div>
  );
}

export default App;
