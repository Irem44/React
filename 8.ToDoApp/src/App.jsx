import { useState } from "react";
import "./App.css";

import Create from "./components/Create";

function App() {
  const [content, textContent] = useState([]);

  const ekle = (newValue) => {
    textContent([...content, newValue]);
  };
  return (
    <div>
      <Create brand={content} fnc={ekle} />
    </div>
  );
}

export default App;
