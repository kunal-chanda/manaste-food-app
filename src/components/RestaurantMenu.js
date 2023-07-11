import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroCards from "../utils/useRestroCards";

const RestaurantMenu = ()=> {
    
    const {resId} = useParams();

    const restroInfo = useRestroCards(resId);
   console.log(restroInfo)
    if(restroInfo === null) return <Shimmer />

   const {name,cuisines,costForTwoMessage,avgRating} = restroInfo?.cards[0]?.card?.card?.info;
   const itemCards = [...restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards];

    return(
        <div className="border flex flex-col p-5">
            <p className="font-bold text-xl">{name}</p>
            <p>{cuisines.join(", ") +" - "+costForTwoMessage}</p>
            <p className="font-bold">Rating: {avgRating}</p>
            <p className="font-bold">Lits Of Items: </p>
            <ul className="list-disc p-5"> 
             {itemCards.map((item)=>
             <li key={item.card?.info?.id}>{item.card?.info?.name} 
             { " -- "+item.card?.info?.description || " "}" -- Rs/-" 
             {(item.card?.info?.price)/100}</li>)}
            </ul>
        </div>
    );

};

export default RestaurantMenu;