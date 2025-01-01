import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{ textDecoration: "none", margin: "10px" }} to="employee">
        Çalışanlar Hakkında
      </Link>
      <Link style={{ textDecoration: "none", margin: "10px" }} to="company">
        Şirket Hakkında
      </Link>

      <Outlet />
    </div>
  );
}

export default About;
