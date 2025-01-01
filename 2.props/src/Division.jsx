import React from "react";

function Division(props) {
  const { sayi1, sayi2 } = props;
  return (
    <div>
      <div>
        <label>
          Birinci Sayi:{sayi1} ve İkinci Sayı:{sayi2} Bölme:
        </label>
        <textarea style={{ height: "10px", marginLeft: "0.5rem" }}>
          {sayi1 / sayi2}
        </textarea>
      </div>
    </div>
  );
}

export default Division;
