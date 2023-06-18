import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-20.jpg"
        className="logo"
      />
      <ul className="navbar">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
