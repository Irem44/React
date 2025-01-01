import React, { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="h-16 bg-[#A79277] flex-between p-4">
        <div className="flex-row">
          <GiCoffeeBeans
            className="me-3 text-3xl text-[#6C4E31] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <span>Coffee Center</span>
        </div>

        <div className="relative ">
          {open && (
            <div className=" w-32 absolute   top-6 right-10">
              <ul className="bg-[#EAD8C0] rounded-md h-16  flex-column ">
                <li className="flex-row">
                  <a href="/hot">Hot Coffee</a>
                </li>
                <li className="flex-row">
                  <a href="/ice">Ice Coffee</a>
                </li>
              </ul>
            </div>
          )}

          <button onClick={toggle} className="absolute right-9 ">
            <GiHamburgerMenu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
