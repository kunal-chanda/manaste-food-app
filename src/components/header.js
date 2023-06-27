import React, { useState } from "react";
import "../App.css";
import { IMG_LOGO } from "../utils/resource";

export default function Header() {
  const [btnHeader, setBtnHeader] = useState("LogIn");

  return (
    <div className="header">
      <img src={IMG_LOGO} alt="Namaste Food App Logo" className="logo" />
      <ul className="navbar">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li>
          <button className="btn-header"
            onClick={()=>{
              btnHeader === "LogIn" ?
              setBtnHeader("LogOut") :
              setBtnHeader("LogIn")
          }}
          >
            {btnHeader}
          </button>
        </li>
      </ul>
    </div>
  );
}
