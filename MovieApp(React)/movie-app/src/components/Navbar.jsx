import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#00215E] text-[#fff] w-full h-16 p-2 navbar ">
      <div className="flex-row w-40 space-x-3 text-xl">
        <BiSolidCameraMovie
          className="text-3xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <a>TVMO</a>
      </div>
      <div className="space-x-5 text-lg navbar_kategori">
        <button className="cursor-pointer" onClick={() => navigate("/diziler")}>
          Diziler
        </button>
        <button className="cursor-pointer" onClick={() => navigate("/filmler")}>
          Filmler
        </button>
      </div>
    </div>
  );
}

export default Navbar;
