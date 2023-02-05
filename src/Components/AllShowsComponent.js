import React from "react";
import ShowCard from "./ShowCard";

const AllShowsComponent = ({ handleShowClicked, showsData }) => {
  return (
    <div className="particularGenre">
      <h1>Shows</h1>
      <div className="listMovies">
        {showsData.length > 0
          ? showsData.map((ele) => (
              <ShowCard key={ele.id} show={ele} onClick={handleShowClicked} />
            ))
          : "Loading Data..."}
      </div>
    </div>
  );
};

export default AllShowsComponent;
