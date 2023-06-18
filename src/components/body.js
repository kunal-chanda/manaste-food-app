import "../App.css";
import React, { useState } from "react";
import Restrocard from "./restrocard";
import card from "./data";

export default function Body() {
  const [restoCard, updateCard] = useState(card);

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
