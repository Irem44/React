import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();

  //burada ilgili elemanın stat'i dönmektedir
  //Object Destructuring
  const { products } = useSelector((store) => store.product);
  console.log(products);

  useEffect(() => {
    //Burada verdiğin fonksiyon olduğu için onda da parentex kullanmayı unutma!
    dispatch(getAllProducts());
  }, []);
  return (
    <div
      className="flex-row"
      style={{ flexWrap: "wrap", gap: "35px", marginTop: "80px" }}
    >
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
