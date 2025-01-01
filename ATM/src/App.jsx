import { useState } from "react";
import "./App.css";

function App() {
  const [bakiye, setBakiye] = useState("");
  const [tutar, setTutar] = useState(0);

  const paraCek = () => {
    if (tutar > bakiye) {
      alert("Yetersiz bakiye!");
    } else if (tutar < 0) {
      alert("Yanlış giriş");
    } else {
      setBakiye(bakiye - tutar);
    }
  };

  const paraYatır = () => {
    if (tutar < 0) {
      alert("Yanlış giriş");
    } else {
      setBakiye(bakiye + tutar);
    }
  };

  const bakiyeSorgula = () => {
    setBakiye(bakiye);
    alert("Güncel Bakiyeniz: " + bakiye);
  };

  const cikisYap = () => {
    alert("Çıkış Yapılıyor");
    setTutar(0);
  };

  return (
    <div className="container">
      <div className="header">Welcome Bank</div>
      <div>
        <div className="header islemler">İşlemler</div>
        <button onClick={paraCek} className="btn">
          Para Çek
        </button>
        <button onClick={paraYatır} className="btn">
          Para Yatır
        </button>
        <button onClick={bakiyeSorgula} className="btn">
          Bakiye Sorgula
        </button>
        <button onClick={cikisYap} className="btn">
          Çıkış Yap
        </button>
      </div>
      <div className="inpt">
        <input
          type="number"
          value={tutar}
          onChange={(e) => setTutar(Number(e.target.value))}
        ></input>
        <div className="bakiye">Bakiye:</div>
        <div className="tutar">
          <input
            type="number"
            value={bakiye}
            onChange={(e) => {
              setBakiye(Number(e.target.value));
            }}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
