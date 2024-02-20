import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { FETCH_URL } from "../Utils/Constans";
import Shimmer from "./Shimmer";


const Body = () => {
  //local State Variable - Super powerful variable

  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      FETCH_URL
    );
    const json = await data.json();
    console.log(json.data.cards[4]);
    setListOfRest(
      //Optional Channing
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

if(listOfRest.length == 0 ){
  return <Shimmer/>
}

  // Normal Js Valirable

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRest(filteredList);
          }}
        >
          {" "}
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* Restro Card */}
        {listOfRest.map((resturant) => (
          <RestroCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
