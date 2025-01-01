import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import ProductsList from "../components/ProductsList";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Ürün Detayları</h1>
      <hr />
      {products &&
        products.map((product) => {
          if (product.id == id) {
            return <ProductsList product={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
