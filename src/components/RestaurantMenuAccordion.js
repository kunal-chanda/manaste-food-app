import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuAccordion = (props)=>{
    const [showItems, setShowItems] = useState(false);
    //console.log(props)
    const onClickAccordion = ()=>{
        //console.log("onClickAccordion clicked")
        showItems ?setShowItems(false) : setShowItems(true);
        //x.style.display==="none" ? x.style.display ="block" : x.style.display ="none";
    }
    return(
        <div className="bg-gray-150 shadow-lg  mx-auto my-3 px-2 cursor-pointer">
           <div className="justify-between flex" onClick={onClickAccordion}>
            <span className="font-bold text-xl underline text-gray-600">{props.data?.title} ({props.data?.itemCards?.length}) </span> 
            <span> ⬇ </span>
           </div>
          {showItems && <ItemList data={props.data?.itemCards}/> }

        </div>
    );
}

export default RestaurantMenuAccordion;