import { useParams } from "react-router-dom";

import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantInfo(resId);

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
      <div className="mb-6 ml-6">
        <h1 className="font-semibold text-xl my-4">{name}</h1>
        <p className="">
          cuisines: <span className="font-semibold">{cuisines.join(", ")}</span>
        </p>
        <p>
          {city}, {sla.lastMileTravel} Km
        </p>
      </div>

      <h1 className="font-semibold text-xl ml-6">Menu</h1>

      <ul>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id} className="h-30">
            <li className="flex justify-between items-center m-4 p-4 border-b-2">
              <div>
                <p className="font-medium">{item?.card?.info?.name}</p>
                <p className="text-xs py-2">
                  Rs{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="text-xs font-thin">
                  {item?.card?.info?.description}
                </p>
              </div>

              <img
                className="h-24 p-2 rounded-xl"
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
