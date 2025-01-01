import { useState } from "react";
import "./App.css";

function App() {
  //state tanımlama
  //useState:hooks

  // const [count, setCount] = useState(0);

  // const arttir = () => {
  //   setCount(count + 1);
  // };

  // const azalt = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const [liste, setListe] = useState(["Sude", "İrem", "Nazlı"]);

  // const getir = () => {
  //   for (let i = 0; i < liste.length; i++) {
  //     alert(liste[i]);
  //   }
  // };

  //useState sadece bir eleman alır mesela burada eğer dizi içine objeleri koymasaydık çalışmazdı.

  const [sozluk, setSozluk] = useState([
    {
      name: "İrem",
      surname: "Demir",
      vize1: 60,
      vize2: 50,
    },
    {
      name: "Sude",
      surname: "Kalan",
      vize1: 80,
      vize2: 50,
    },
    {
      name: "Arda",
      surname: "Alp",
      vize1: 30,
      vize2: 50,
    },
  ]);

  const gecmeKalma = () => {
    for (let ogrenci of sozluk) {
      let ortalama = (ogrenci.vize1 + ogrenci.vize2) / 2;
      if (ortalama >= 50) {
        alert(`${ogrenci.name} ${ortalama} ile geçtin`);
      } else {
        alert(`${ogrenci.name} ${ortalama} ile kaldın`);
      }
    }
  };

  return (
    <div>
      {/* <div>{count}</div>
      <button onClick={arttir}>Arttır</button>
      <button onClick={azalt}>Azalt</button>
      <div></div> */}
      {/* <div>{liste}</div>
      <button onClick={getir}>Listeden Eleman Getir</button> */}
      <button onClick={gecmeKalma}>Geçti mi kaldı mı?</button>
    </div>
  );
}

export default App;
