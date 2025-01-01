import { useState } from "react";
import Sum from "./sum";
import Calculator from "./calculator";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";

//Biz şimdi App promtundan Sum promptuna bir değer gönderiyoruz.
//Yani iki prompt arasında veri aktarımında Props kullanmış oluruz
function App() {
  let sayi1 = document.getElementById("input1");
  let sayi2 = document.getElementById("input2");
  return (
    <>
      <Calculator>
        <Sum sayi1={2} sayi2={3} />
        <Subtraction sayi1={5} sayi2={3} />
        <Subtraction sayi1={6} sayi2={3} />
        <Multiplication sayi1={6} sayi2={3} />
        <Division sayi1={6} sayi2={3} />
      </Calculator>
    </>
  );
}

export default App;
