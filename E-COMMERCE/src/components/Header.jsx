import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";
import Product from "./Product";
import { getAllProducts, searched } from "../redux/slices/productSlice";

function Header() {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket);

  const [deger, setDeger] = useState("");

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="flex-row"
        style={{ margin: "15px" }}
        onClick={() => navigate("/")}
      >
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text">Meri A.Ş</p>
      </div>

      <div className="flex-row">
        <input
          // onClick={search}
          value={deger}
          onChange={(e) => setDeger(e.target.value)}
          className="search-input "
          type="text"
          placeholder="Bir şeyler ara"
        />
        <button
          onClick={() => {
            dispatch(searched(deger));
          }}
          className="search"
        >
          Search
        </button>
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}

          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <CiShoppingBasket className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
