import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualCard from "./IndividualCard";
import AllShowsComponent from "./AllShowsComponent";
import "../App.css";
import Header from "./Header";

const Home = () => {
  const [showsData, setShowsData] = useState([]);
  const [showClicked, setShowClicked] = useState(false);
  const [query, setQuery] = useState("");
  const [showId, setShowId] = useState("");
  let allGenres = new Set();
  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      response.data.map((ele) => {
        return ele.genres.map((e) => {
          return allGenres.add(e);
        });
      });
      setShowsData(response.data);
    });
    return () => {
      setShowsData([]);
    };
  },[]);

  const handleSearch = () => {
    let filteredArray = [];
    if (query === "") {
      axios.get("https://api.tvmaze.com/shows").then((response) => {
        setShowsData(response.data);
      });
    } else {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => {
          response.data.forEach((element) => {
            filteredArray.push(element.show);
          });
          setShowsData(filteredArray);
        });
    }
  };

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      axios.get("https://api.tvmaze.com/shows").then((response) => {
        setShowsData(response.data);
      });
    } else {
      let filteredArray = [];
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then((response) => {
          response.data.forEach((element) => {
            filteredArray.push(element.show);
          });
          setShowsData(filteredArray);
        });
    }
    setQuery(event.target.value);
  };
  const handleShowClicked = (showId) => {
    setShowId(showId);
    setShowClicked(true);
  };

  return (
    <div className="Container">
      <Header
        query={query}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      {!showClicked && (
        <AllShowsComponent
          handleShowClicked={handleShowClicked}
          showsData={showsData}
        />
      )}
      {showClicked && (
        <IndividualCard id={showId} setShowClicked={setShowClicked} />
      )}
    </div>
  );
};

export default Home;
