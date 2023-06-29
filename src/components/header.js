import React, { useState } from "react";
import "../App.css";
import { IMG_LOGO } from "../utils/resource";
import { Link } from "react-router-dom";

export default function Header() {
  const [btnHeader, setBtnHeader] = useState("LogIn");

  return (
    <div className="header">
      <img src={IMG_LOGO} alt="Namaste Food App Logo" className="logo"/>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" >About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
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
