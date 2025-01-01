import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import "../css/ProductDetails.css";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;

  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      counter,
    };

    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  return (
    <div
      style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <img
          src={image}
          width={300}
          height={500}
          style={{ marginRight: "30px" }}
        />
      </div>
      <div className="content">
        <h1>{title}</h1>

        <p>{description}</p>
        <h1>{price} ₺</h1>

        <div className="adet">
          <CiCirclePlus className="arttir" onClick={increment} />
          {counter}
          <CiCircleMinus className="azalt" onClick={decrement} />
        </div>
        <div>
          <button onClick={addBasket} className="sepete-ekle">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
