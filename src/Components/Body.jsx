import resObject from "../Utils/mockData";
import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../Utils/mockData";

const Body = () => {
  //local State Variable - Super powerful variable

  const [listOfRest, setListOfRest] = useState(
resList
  );

  // Normal Js Valirable


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = resList.filter((res)=>(res.info.avgRating > 4.5
           ))
           setListOfRest(filteredList)
          }}
        >
          {" "}
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* Restro Card */}
        {listOfRest.map((resturant) => (
          <RestroCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
