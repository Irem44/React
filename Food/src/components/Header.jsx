import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">
        Ana Sayfa
      </Link>
      <Link className="link" to="/foods">
        Yemekler
      </Link>
      <Link className="link" to="/drinks">
        İçecekler
      </Link>
    </div>
  );
}

export default Header;
