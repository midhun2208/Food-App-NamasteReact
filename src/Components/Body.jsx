import RestroCard, { withOpenTag } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import { FETCH_URL } from "../Utils/Constans";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const Body = () => {
  //local State Variable - Super powerful variable

  const [listOfRest, setListOfRest] = useState(null);

  const [filerRest, setFilterRest] = useState([]);

  const [searchRest, setSearchRest] = useState("");

  // console.log(listOfRest);

  const RestroCardWithOpen = withOpenTag(RestroCard);

  const {loggedInUser, setUserName} = useContext(UserContext)

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
  return listOfRest == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4  search">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black "
            value={searchRest}
            onChange={(e) => setSearchRest(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-xl"
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
        <div className=" m-4 p-4 items-center flex">
          <button
            className="px-4 py-4 bg-gray-100  rounded-lg"
            onClick={() => {
              console.log("hi");
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

        <div className=" m-4 p-4 items-center flex">
          <label htmlFor="" > User Name: &nbsp;</label>
          <input type="text" className="p-2 border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* Restro Card */}
        {filerRest.map((resturant) => (
          <Link key={resturant.info.id} to={`/resturants/${resturant.info.id}`}>
            {resturant?.info?.veg ? (
              <RestroCardWithOpen resData={resturant} />
            ) : (
              <RestroCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
