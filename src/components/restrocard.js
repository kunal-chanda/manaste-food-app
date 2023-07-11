import "../App.css";
import React from "react";
import { IMG_LINK } from "../utils/resource";

function Restrocard(props) {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.data;
  return (
    <div className="m-2 p-2 h-80 w-52 flex flex-wrap border bg-slate-400">
      <img
        className="h-40 w-48"
        src={IMG_LINK + "/" + cloudinaryImageId}
        alt="Restro Card"
      />
      <h3 className="justify-center font-bold truncate ...">{name.toUpperCase()}</h3>
      <h4 className="truncate ... overflow-hidden">{cuisines.join(", ")}</h4>
      <h4 className="font-bold text-left">Rating: {avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
}

export default Restrocard