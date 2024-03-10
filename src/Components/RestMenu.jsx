import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../Utils/useRestMenu";
import ResturantCategory from "./ResturantCategory";

const RestMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const restInfo = useRestMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  // console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // for the category like recommed and all  filterMethod
  const category =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleChange = (index) => {
      setShowIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  // console.log(category);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-9">{name}</h1>
      <p className="font-bold text-2xl mb-4">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      {category.map((category, index) => (
        <ResturantCategory
          key={index}
          data={category?.card?.card}
          setShowIndex={() => handleChange(index)}
          showItem={index === showIndex ? true :false}
        />
      ))}
    </div>
  );
};

export default RestMenu;
