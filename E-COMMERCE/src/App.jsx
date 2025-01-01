import { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";

import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBasket,
  removeFromBasket,
  setDrawer,
  totalMoneyClear,
} from "./redux/slices/basketSlice";
import { useParams } from "react-router-dom";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          sx={{ padding: "20px" }}
          onClose={() => dispatch(setDrawer())}
          anchor="right"
          open={drawer}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row drawer" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={50}
                      height={50}
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title}({product.counter})
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginRight: "10px",
                        width: "60px",
                      }}
                    >
                      {product.price}TL
                    </p>
                    <button
                      onClick={() => {
                        dispatch(removeFromBasket(product.id));
                      }}
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "rgb(185, 76, 76)",
                        border: "none",
                        color: "#fff",
                        width: "50px",
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              );
            })}
          <div>
            <p style={{ textAlign: "center" }}> Toplam tutar : {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;