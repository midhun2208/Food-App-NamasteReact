import { CDN_URL } from "../Utils/Constans";

const RestroCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,

    costForTwo,
  } = resData.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div data-testid= "resCards" className="m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-300" >
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

export const withOpenTag = (RestroCard) => {
  return (props) => {
    return (<>
    <label className="absolute bg-green-500 text-white p-1 mt-2 rounded-lg ml-3 font-medium w-12 text-center">Veg</label>
    <RestroCard {...props}/>
    </>);
  };
};

export default RestroCard;
