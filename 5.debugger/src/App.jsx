import { useState } from "react";

import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalama = () => {
    debugger;
    const ortm = topla() / 2;
    yazdir(ortm);
  };

  const topla = () => {
    debugger;
    return vize1 + vize2;
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortalama: " + sonuc);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        ></input>
      </div>

      <div>
        <button onClick={ortalama}>Ortalama Bul</button>
      </div>
    </div>
  );
}

export default App;
