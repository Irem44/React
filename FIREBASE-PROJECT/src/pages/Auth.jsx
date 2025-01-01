import React from "react";
import { FaGoogle } from "react-icons/fa";

function Auth() {
  return (
    <div className="main-auth">
      <div className="auth">
        <div>
          <h1>Giriş Yap / Kaydol</h1>
        </div>

        <input type="email" placeholder="email giriniz"></input>

        <input type="password" placeholder="şifre giriniz"></input>

        <div className="buttons">
          <div className="googlebuton">
            <button
              className="buton2"
              style={{
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <FaGoogle style={{ marginRight: "10px", marginTop: "5px" }} />
              </div>
              Google ile giriş
            </button>
          </div>
          <div>
            <button className="buton1">Giris Yap</button>
            <button className="buton2" style={{ width: "80px" }}>
              Kaydol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
