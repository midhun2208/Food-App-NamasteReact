import resObject from "../Utils/mockData";
import RestroCard from "./RestroCard";



const Body = () => {
    return (
      <div className="body">
        <div className="Search">Search Bar</div>
        <div className="res-container">
          {/* Restro Card */}
          {resObject.map((resturant) => (
            <RestroCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;