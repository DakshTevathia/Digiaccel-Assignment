import React from "react";
import "../App.css";

function ShowCard({ show, onClick }) {
  return (
    <div
      className="showCard"
      onClick={() => {
        onClick(show.id);
      }}
    >
      <img
        className="showImage"
        src={show?.image?.medium}
        alt={`${show.name} Show's Pic.`}
      />
      <div className="showName">{show.name}</div>
    </div>
  );
}

export default ShowCard;
