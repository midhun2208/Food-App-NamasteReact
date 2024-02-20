import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { FETCH_URL } from "../Utils/Constans";
import Shimmer from "./Shimmer";

const Body = () => {
  //local State Variable - Super powerful variable

  const [listOfRest, setListOfRest] = useState([]);

  const [filerRest, setFilterRest] = useState([]);

  const [searchRest, setSearchRest] = useState("");

  // Whenever a state varible is triggered the react re-renders the component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_URL);
    const json = await data.json();
    setListOfRest(
      //Optional Channing
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Contitional Rendering

  // Normal Js Valirable

  return listOfRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchRest}
            onChange={(e) => setSearchRest(e.target.value)}
          />
          <button
            onClick={() => {
              const filterSearch = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchRest.toLowerCase())
              );
              setFilterRest(filterSearch);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilterRest(filteredList);
           
          }}
        >
          {" "}
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* Restro Card */}
        {filerRest.map((resturant) => (
          <RestroCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
