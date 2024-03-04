import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../Utils/useRestMenu";

const RestMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  return (
    <div>
      <h1 className="font-bold py-3 text-3xl">{name}</h1>
      <p className="text-xl my-2">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      <h2 className="text-2xl my-2 font-bold ">Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="text-xl my-2">
            {item.card.info.name}- Rs.
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
