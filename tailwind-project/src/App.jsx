import { useState } from "react";
import "./App.css";
import { CiShoppingBasket } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <nav className="bg-black border-gray-200 dark:bg-gray-900 text-white h-15 w-full">
        <div className="p-3 w-full flex max-sm:block space-y-2 ">
          <a className="flex   items-center w-full">
            <CiShoppingBasket className="me-2 size-6 " />
            <p className="float-end text-base "> Quick Shopping</p>
          </a>

          <div>
            <ul className="flex space-x-4  text-base max-sm:block space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="m-4 font-mono text-lg mb-5 flex-wrap w-full overflow-x-hidden">
        Popüler Ürünler
      </div>

      <div className=" grid grid-cols-5  p-2 max-sm:p-4 gap-2 grid-cols-1 ">
        <div className="flex justify-center items-center  w-56 h-48 max-sm:w-full !important h-72">
          <img src="https://picsum.photos/200/300" className="w-full h-full " />
        </div>

        <div className="flex justify-center items-center  w-56 h-48 max-sm:w-full !important h-72">
          <img src="https://picsum.photos/200/300" className="w-full h-full " />
        </div>
        <div className="flex justify-center items-center  w-56 h-48 max-sm:w-full !important h-72">
          <img src="https://picsum.photos/200/300" className="w-full h-full " />
        </div>
        <div className="flex justify-center items-center  w-56 h-48 max-sm:w-full !important h-72">
          <img src="https://picsum.photos/200/300" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
}

export default App;
