import "../App.css";
import React, { useEffect, useState } from "react";
import Restrocard, { withPromotedLabel } from "./restrocard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [restoCard, setRestoCard] = useState([]);
  const [searchtText, setSearchText] = useState("");

  const RestroCardWithPromotedLabel = withPromotedLabel(Restrocard); //Returen RestroCard Component with Promoted label on it

  const dummy = "Dummy Data";

  useEffect(()=>{
    fetchData();
  },[])

  //console.log(restoCard);

  const fetchData = async ()=>{
    let data = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4791025&lng=88.37370639999999&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4791025&lng=88.37370639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //console.log(json)
      //optional chaining
      
      const resCards = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //const resCards = json?.data?.cards[2]?.data?.data?.cards;
      setRestoCard(resCards);
  }
  //conditional rendering
  /* if(restoCard?.length===0){
    return <Shimmer/>
  } */
  return restoCard?.length===0 ? (
     <Shimmer /> 
   ) : (
    <div className="body-container">
      <>
        <input type="text" value={searchtText} onChange={(e)=> setSearchText(e.target.value)} className="border-4 mx-3 border-slate-950 rounded-xl" />
        <button
        onClick={()=> {
          const searchResult = 
          restoCard.filter((filterdRestro)=> filterdRestro.data.name.toLowerCase().includes(searchtText.toLocaleLowerCase())) 
          setRestoCard(searchResult)
        }
        } className="mx-2 border-4 rounded-xl p-2  border-slate-950"
        >
          Search
        </button>
      </>
      <button
        className="top-rated border-4 rounded-xl p-2  border-slate-950"
        onClick={() => {
          let topCard = restoCard.filter((topRated) => topRated.data.avgRating >= 4);
          setRestoCard(topCard);
        }}
      >
        Top Rated
      </button>
      <button className="top-rated border-4 rounded-xl p-2  border-slate-950" onClick={()=> fetchData()}>
        Clear Filter
      </button>
      <div className="flex flex-wrap">
        {restoCard?.map((restro) => (
          restro.info?.promoted ?
          <Link to={"/restaurants/"+ restro.info.id} key={restro.info.id}><RestroCardWithPromotedLabel resData={restro} /></Link>
          :
          <Link to={"/restaurants/"+ restro.info.id} key={restro.info.id}><Restrocard resData={restro} dummy={dummy} /></Link>
))}
      </div>
    </div>
  );
}
