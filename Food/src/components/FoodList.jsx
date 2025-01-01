import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function FoodList({ food }) {
  const { id, name, price } = food;

  //Bir aksiyon aldığında şu URL'e git
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "papayawhip", marginBottom: "10px" }}>
      <p>Yemek Detayları</p>
      <h3>Yemek Adı: {name}</h3>
      <h3>Yemek Fiyatı: {price}</h3>
      <button onClick={() => navigate("/foods-details/" + id)}>
        Yemek Detaylarını Getir
      </button>
    </div>
  );
}

export default FoodList;
