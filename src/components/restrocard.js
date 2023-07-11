import "../App.css";
import React from "react";
import { IMG_LINK } from "../utils/resource";

function Restrocard(props) {
  const { name, cuisines, avgRating, slaString , cloudinaryImageId } =
    props.resData.data;
  return (
    <div className="m-2 p-2 h-[275px] w-52 flex flex-col border bg-slate-300 rounded-md">
      <img
        className="h-40 w-48 rounded-md"
        src={IMG_LINK + "/" + cloudinaryImageId}
        alt="Restro Card"
      />
      <h3 className="justify-center font-bold truncate ...">{name.toUpperCase()}</h3>
      <h4 className="truncate ... overflow-hidden">{cuisines.join(", ")}</h4>
      <span className="font-bold text-left bg-lime-500 w-12 rounded-md px-1">✡ {avgRating}</span>
      <h4 className="text-yellow-700 font-semibold">{slaString}</h4>
    </div>
  );
}

export default Restrocard