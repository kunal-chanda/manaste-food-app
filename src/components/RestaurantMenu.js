import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroCards from "../utils/useRestroCards";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";
//import { IMG_LINK } from "../utils/resource";

const RestaurantMenu = ()=> {
    
    const {resId} = useParams();

    const restroInfo = useRestroCards(resId);
   //console.log(restroInfo)
    if(restroInfo === null) return <Shimmer />

   const {name,cuisines,costForTwoMessage,avgRating} = restroInfo?.cards[0]?.card?.card?.info;
   //const itemCards = [...restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards];
   const itemCategory = restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>
    cat.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   //console.log(itemCategory)

    return(
        <div className="border flex flex-col p-5 w-8/12 m-auto ">
            <p className="font-bold text-xl">{name}</p>
            <p>{cuisines.join(", ") +" - "+costForTwoMessage}</p>
            <p className="font-bold">Rating: {avgRating}</p>
            {/* <p className="font-bold">Lits Of Items: </p>
            <ul className="list-disc p-5"> 
             {itemCards.map((item)=>
             <li key={item.card?.info?.id}>{item.card?.info?.name} 
             { " -- "+item.card?.info?.description || " "}" -- Rs/-" 
             {(item.card?.info?.price)/100}</li>)}
            </ul> */}
            <ul>
                {
                    itemCategory.map((itemCat,index)=>(
                         <li key={index}><RestaurantMenuAccordion data={itemCat?.card?.card}/></li>) //
                        )
                }
            </ul>
        </div>
    );


   /*  {itemCat.card?.card?.('@type')==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'?
                        itemCat.card?.card?.title:"Not Found"} */
};

export default RestaurantMenu;