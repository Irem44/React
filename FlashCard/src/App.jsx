import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { datas } from "./components/Data";
import Cards from "./components/Cards";
import "./css/cards.css";

function App() {
  return (
    <div>
      {/* Header Componenti */}
      <Header />
      <div className="content">
        {datas?.map((data) => (
          <Cards key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
