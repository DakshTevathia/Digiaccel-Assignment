import axios from "axios";
import React, { useEffect, useState } from "react";

const IndividualCard = ({ setShowClicked, id }) => {
  const [showData, setShowData] = useState({});
  const [showCast, setShowCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
      setShowData(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}/cast`).then((response) => {
      setShowCast(response.data);
    });
  }, [id]);
  return (
    <div className="MainCard">
      <div style={{ textAlign: "center" }}>
        <img
          className="showImageDetails"
          src={showData?.image?.original}
          alt={`${showData.name} Show's Pic.`}
        />
      </div>
      <div className="rightGridPart">
        <button
          onClick={() => {
            setShowClicked(false);
          }}
        >
          Close
        </button>
        <div>
          <h1>{showData?.name}</h1>
          <div className="flexDiv">
            <h2> {showData?.rating?.average}</h2>
            <div className="maxRatingBar">
              <div
                className="filledRatingBar"
                style={{
                  width: parseFloat(showData?.rating?.average) * 32,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="showInfo">
          <div>
            <i>Premier: </i>
            {showData?.premiered}
          </div>{" "}
          <div>
            <i>Episode Length: </i>
            {showData.averageRuntime} Minutes
          </div>
          <a href={showData.officialSite}>Link To Website</a>
        </div>
        <div className="castName">
          <i> Cast Includes-</i>
          {showCast.map((element) => {
            return <div key={element.character.id}>{element.person.name}</div>;
          })}
        </div>
        <div>
          {" "}
          {showData?.summary?.substring(3, showData.summary.length - 4)}{" "}
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
