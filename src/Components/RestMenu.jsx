import { useEffect, useState } from "react";

const RestMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=67378&submitAction=ENTER`
    );
    const json = await data.json();
    setRestInfo(json.data);
    console.log(restInfo);
  };
  console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[2]);
  //   const { name, cuisines, costForTwoMessage } =
  //     restInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      {/* <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      <h2>Menu</h2> */}

      {/* {restInfo.map((item) => (
        <ul>
          <li></li>
        </ul>
      ))} */}

      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestMenu;
