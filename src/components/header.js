import React, { useContext, useState } from "react";
import "../App.css";
import { IMG_LOGO } from "../utils/resource";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
  const [btnHeader, setBtnHeader] = useState("LogIn");
  const {loggedInUser} = useContext(UserContext);
  const cartItem = useSelector((store)=>store.cart.item);
  console.log(cartItem);

  return (
    <div className="flex justify-between min-h-15 flex-row font-semibold bg-slate-400 text-2xl text-white items-center">
      <img src={IMG_LOGO} alt="Namaste Food App Logo" className="w-24 m-5 cursor-pointer"/>
      <ul className="navbar m-7 px-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" >About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li className="font-semibold "><Link to="/cart"> Cart - ({cartItem.length} Items)</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li>
          <button className="btn-header border-4 rounded-xl p-2"
            onClick={()=>{
              btnHeader === "LogIn" ?
              setBtnHeader("LogOut") :
              setBtnHeader("LogIn")
          }} 
          >
            {btnHeader}
          </button>
        </li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
}
