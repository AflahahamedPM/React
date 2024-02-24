import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_MENU_URL } from "../utils/constants";
import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestauraInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setRestauraInfo(json);
  };
  if (restaurantInfo.length === 0) return <Shimmer />;

  const {
    name,
    cuisines,
    city,
    sla,
  } = restaurantInfo?.data?.cards[2]?.card?.card?.info;

  const {
    itemCards,
  } = restaurantInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <>
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>
          {city}, {sla.lastMileTravel} Km
        </p>
      </div>

      <h1>Menu</h1>

      <ul>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id} className="menu">
            <li>
              <p>
                {item?.card?.info?.name} - Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <img
                className="menu-image"
                src={RESTAURANT_MENU_IMAGE_URL + item?.card?.info?.imageId}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
