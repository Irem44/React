import React from "react";
import { useNavigate } from "react-router-dom";

function ProductsList({ product }) {
  const { id, name, price } = product;

  //bir aksiyon olduğunda bizi bir url'e yönlendirir
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginBottom: "10px", backgroundColor: "darkgrey" }}>
        <p>Ürün Detayı</p>
        <h3>Ürün Adı: {name}</h3>
        <h3>Ürün Fiyatı: {price}</h3>
        <button onClick={() => navigate("/products-details/" + id)}>
          detayına git
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
