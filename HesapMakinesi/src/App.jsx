import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const toplama = () => {
    setSonuc(number1 + number2);
  };
  const cikarma = () => {
    setSonuc(number1 - number2);
  };
  const carpma = () => {
    setSonuc(number1 * number2);
  };
  const bolme = () => {
    if (number2 === 0) {
      alert("2.sayıyı farklı bir sayı seçiniz!");
    } else {
      setSonuc(number1 / number2);
    }
  };

  const temizle = () => {
    setNumber1(0);
    setNumber2(0);
    setSonuc(0);
  };

  return (
    <div className="container">
      <div className="header">Hesap Makinesi</div>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        ></input>
      </div>

      <div>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        ></input>
      </div>

      <div className="buttons">
        <button onClick={toplama} className="btn">
          Topla
        </button>
        <button onClick={cikarma} className="btn">
          Çıkar
        </button>
        <button onClick={carpma} className="btn">
          Çarp
        </button>
        <button onClick={bolme} className="btn">
          Böl
        </button>
        <button onClick={temizle} className="btn">
          Temizle
        </button>
      </div>

      <div>
        <input type="number" value={sonuc} placeholder="Sonuç"></input>
      </div>
    </div>
  );
}

export default App;
