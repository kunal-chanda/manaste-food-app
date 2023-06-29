import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/resource";

const RestaurantMenu = ()=> {
    const [restroInfo, setRestroInfo] = useState(null);
    const {resId} = useParams();
   
    useEffect(()=>{
        fetchRestaurantDetails();
    },[]);

    const fetchRestaurantDetails = async ()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestroInfo(json.data);
    }
    if(restroInfo === null) return <Shimmer />

   const {name,cuisines,costForTwoMessage,avgRating} = restroInfo.cards[0]?.card?.card?.info;
   const itemCards = [...restroInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards];

    return(
        <div className="lits-of-menus">
            <h1>{name}</h1>
            <p>{cuisines.join(",") +" "+costForTwoMessage}</p>
            <p>Rating: {avgRating}</p>
            <p>Lits Of Items: </p>
            <ul> 
             {itemCards.map((item)=>
             <li key={item.card?.info?.id}>{item.card?.info?.name} 
             {+ " -- "+item.card?.info?.description || " "}" -- Rs/-" 
             {(item.card?.info?.price)/100}</li>)}
            </ul>
        </div>
    );

};

export default RestaurantMenu;