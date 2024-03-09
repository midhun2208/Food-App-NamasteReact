import { useState } from "react";
import ItemList from "./ItemList";


const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  // console.log(data);
  const handleClick = ()=>{
    setShowIndex ()
   
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-md ">
        <div className="flex justify-between cursor-pointer p-7" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
       {showItem &&  <ItemList items={data?.itemCards} /> }
      </div>
    </div>
  );
};

export default ResturantCategory;
