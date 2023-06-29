import "../App.css";
import React, { useEffect, useState } from "react";
import Restrocard from "./restrocard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [restoCard, updateCard] = useState([]);
  const [searchtText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[])

  //console.log(restoCard);

  const fetchData = async ()=>{
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //optional chaining
      const resCards = json?.data?.cards[2]?.data?.data?.cards;
      updateCard(resCards);
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
        <input type="text" value={searchtText} onChange={(e)=> setSearchText(e.target.value)} />
        <button
        onClick={()=> {
          const searchResult = 
          restoCard.filter((filterdRestro)=> filterdRestro.data.name.toLowerCase().includes(searchtText.toLocaleLowerCase())) 
          updateCard(searchResult)
        }
        }
        >
          Search
        </button>
      </>
      <button
        className="top-rated"
        onClick={() => {
          let topCard = restoCard.filter((topRated) => topRated.data.avgRating >= 4);
          updateCard(topCard);
        }}
      >
        Top Rated
      </button>
      <button className="top-rated" onClick={()=> fetchData()}>
        Clear Filter
      </button>
      <div className="res-container">
        {restoCard?.map((restro) => (
          <Link to={"/restaurants/"+ restro.data.id} key={restro.data.id}><Restrocard resData={restro} /></Link>
        ))}
      </div>
    </div>
  );
}
