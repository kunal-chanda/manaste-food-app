import React from "react";
import "../App.css";
import { IMG_LOGO } from "../utils/resource";

export default function Header() {
  return (
    <div className="header">
      <img src={IMG_LOGO} alt="Namaste Food App Logo" className="logo" />
      <ul className="navbar">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
