import { CDN_URL } from "../Utils/Constans";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,

    costForTwo,
  } = resData.info;
 

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo rounded-lg"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export default RestroCard;
