import { CDN_URL } from "../Utils/Constans";

const ItemList = ({ items }) => {
//   console.log(items);

  if (items.length === 0) return <></>;

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 my-4 mx-3 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="py-2 w-9/12">
              <span className="">{item?.card?.info?.name}</span>
              <br />
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <div className="w-3/12 py-2">
              <div className="absolute mx-11 mt-[102px]">
                <button className="p-2 bg-white text-green-500 rounded-lg shadow-md">
                  Add +
                </button>
              </div>
              <img
                src={
                  item?.card?.info?.imageId
                    ? CDN_URL + item?.card?.info?.imageId
                    : ""
                }
                alt=""
                className="w-54 h-36"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
