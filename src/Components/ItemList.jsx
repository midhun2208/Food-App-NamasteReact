import { CDN_URL } from "../Utils/Constans";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <br />
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <div>
              <img
                src={CDN_URL + item?.card?.info?.imageID}
                alt=""
                className="w-14"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
