import React from "react";
import ProductsList from "../components/ProductsList";
import { products } from "../data/product";
function Products() {
  return (
    <div>
      {products &&
        products.map((product) => <ProductsList product={product} />)}
    </div>
  );
}

export default Products;
