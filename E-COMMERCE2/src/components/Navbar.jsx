import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CgRemove } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import {
  arttir,
  azalt,
  deleted,
  say,
  totalPrice,
} from "../Redux/ProductsSlice";
import { MdDelete } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const [useDrawer, setUseDrawer] = useState(false);
  const { basket, total, sayac } = useSelector((store) => store.Product);

  const dispatch = useDispatch();

  const drawer = () => {
    setUseDrawer(!useDrawer);
    dispatch(say());
  };

  return (
    <div className="navbar p-4">
      <div className="flex-beetwen ">
        <div className="flex-row">
          <FaShopify className="text-3xl me-3 " />
          <p>E-COMMERCE'S CENTER</p>
        </div>

        <div className="space-x-3 ">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/electronics" className="links">
            electronics
          </Link>
          <Link to="/jewelery" className="links">
            jewelery
          </Link>
          <Link to="/men" className="links">
            men's clothing
          </Link>
          <Link to="/women" className="links">
            women's clothing
          </Link>

          {useDrawer && (
            <div
              id="drawer-example"
              className="fixed top-0 right-0 w-96 h-full bg-gray-200 shadow-lg p-4 text-black overflow-scroll"
            >
              <div className="flex justify-between items-center my-4">
                <span className="text-2xl text-red-900">Sepet</span>
                <button onClick={drawer}>
                  <IoCloseSharp className="text-xl " />
                </button>
              </div>
              <div className="cizgi mb-8"></div>
              {/* sepet ürünleri */}
              {/* basket ile işlem yapılacak */}
              {basket &&
                basket.map((bs) => {
                  return (
                    <div className="flex items-center w-full h-32 sepet-div mb-6">
                      <img src={bs.image} className="w-20 h-full  rounded-lg" />
                      <div className="ms-5  ">
                        <p className="text-xs me-4">{bs.title}</p>
                        <p className="text-red-900 mt-1">{bs.price}₺</p>
                        <div className="mt-2 flex items-center text-lg ">
                          <CgAdd
                            className="me-1 cursor-pointer"
                            onClick={() => {
                              dispatch(arttir(bs.id));
                              dispatch(totalPrice());
                              dispatch(say());
                            }}
                          />
                          {bs.quantity}
                          <CgRemove
                            className="ms-1 cursor-pointer"
                            onClick={() => {
                              dispatch(azalt(bs.id));
                              dispatch(totalPrice());
                              dispatch(say());
                            }}
                          />
                          <MdDelete
                            className="ms-28 text-xl text-red-900 hover:scale-110 cursor-pointer "
                            onClick={() => {
                              dispatch(deleted(bs.id));

                              dispatch(totalPrice());
                              dispatch(say());
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

              <div className="mt-10">Toplam Fiyat:{total}</div>
            </div>
          )}
          <button className="relative">
            <SlBasket
              className="inline text-2xl  "
              aria-controls="drawer-example"
              onClick={drawer}
            />
            <div className="absolute rounded-full -top-3 -end-3 h-6 w-6 text-red-500">
              {sayac}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
