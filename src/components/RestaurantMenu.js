import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(typeof resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const data = await response.json();
    setResInfo(data.data);
  };

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);

  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;

  const itemCard =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCard.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
