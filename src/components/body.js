import "../App.css";
import React, { useEffect, useState } from "react";
import Restrocard from "./restrocard";
import card from "./data";

export default function Body() {
  const [restoCard, updateCard] = useState(card);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
  }
  return (
    <div className="body-container">
      <button
        className="top-rated"
        onClick={() => {
          let topCard = card.filter((topRated) => topRated.data.avgRating >= 4);
          updateCard(topCard);
        }}
      >
        Top Rated
      </button>
      <div className="res-container">
        {restoCard.map((restro) => (
          <Restrocard resData={restro} key={restro.data.id} />
        ))}
      </div>
    </div>
  );
}
