import "../App.css";
import React from "react";
import { IMG_LINK } from "../utils/resource";

function Restrocard(props) {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.data;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={IMG_LINK + "/" + cloudinaryImageId}
        alt="Restro Card"
      />
      <h3 className="res-name">{name.toUpperCase()}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="res-avgRating">Rating: {avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
}

export default Restrocard;
