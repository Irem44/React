import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır");
  }, []);

  useEffect(() => {
    console.log(
      "component ile render edildiğinde ve firstName statenin değeri değiştiğinde çalışır"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "component ile render edildiğinde ve lastName statenin değeri değiştiğinde çalışır"
    );
  }, [lastName]);

  // useEffect(() => {
  //   console.log(
  //     "component ile render edildiğinde firstName  ve lastName statelerinin değeri değiştiğinde çalışır"
  //   );
  // }, [firstName, lastName]);

  return (
    <div>
      <button
        onClick={() => {
          setFirstname("Sude");
        }}
      >
        Ad değiştir
      </button>
      <button
        onClick={() => {
          setLastname("Demir");
        }}
      >
        Soyad Değiştir
      </button>
    </div>
  );
}

export default App;
