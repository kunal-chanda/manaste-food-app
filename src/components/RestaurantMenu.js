import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroCards from "../utils/useRestroCards";

const RestaurantMenu = ()=> {
    
    const {resId} = useParams();

    const restroInfo = useRestroCards(resId);
   
    if(restroInfo === null) return <Shimmer />

   const {name,cuisines,costForTwoMessage,avgRating} = restroInfo?.cards[0]?.card?.card?.info;
   const itemCards = [...restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards];

    return(
        <div className="lits-of-menus">
            <h1>{name}</h1>
            <p>{cuisines.join(",") +" "+costForTwoMessage}</p>
            <p>Rating: {avgRating}</p>
            <p>Lits Of Items: </p>
            <ul> 
             {itemCards.map((item)=>
             <li key={item.card?.info?.id}>{item.card?.info?.name} 
             { " -- "+item.card?.info?.description || " "}" -- Rs/-" 
             {(item.card?.info?.price)/100}</li>)}
            </ul>
        </div>
    );

};

export default RestaurantMenu;