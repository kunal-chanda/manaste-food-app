import "../App.css";
import React from "react";
import { IMG_LINK } from "../utils/resource";

const Restrocard = (props) => {
  const { name, cuisines, avgRating, sla , cloudinaryImageId } =
    props.resData.info;
  const dummy = props.dummy;  
  //console.log(props.resData.info)
  return (
    <div className="m-2 p-2 h-[300px] w-52 flex flex-col border bg-slate-300 rounded-md hover:bg-sky-400">
      <img
        className="h-40 w-48 rounded-md"
        src={IMG_LINK + "/" + cloudinaryImageId}
        alt="Restro Card"
      />
      <h3 className="justify-center font-bold truncate ...">{name.toUpperCase()}</h3>
      <h4 className="truncate ... overflow-hidden">{cuisines.join(", ")}</h4>
      <span className="font-bold text-left bg-lime-500 w-12 rounded-md px-1">✡ {avgRating}</span>
      <h4 className="text-yellow-700 font-semibold">{sla.slaString}</h4>
      <h4 className="text-yellow-700 font-semibold">User Name: {dummy}</h4>
    </div>
  );
};

//Higher Order Component
export const withPromotedLabel = (Restrocard) => {
  return (props)=>{
    return(
      <div>
        <label className="text-white bg-black font-semibold absolute p-1 mx-2 rounded-md">Promoted</label>
        <Restrocard  {...props}/>
      </div>
    );
  };
};

export default Restrocard