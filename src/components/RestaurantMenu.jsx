import { useParams } from "react-router-dom";

import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantInfo(resId);

  if (restaurantInfo.length === 0) return <Shimmer />;

  const { name, cuisines } = restaurantInfo?.data?.cards[2]?.card?.card?.info;

  const menuCategories = restaurantInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div className="mb-6 ml-6 text-center">
        <h1 className="font-semibold text-xl my-4">{name}</h1>
        <p className="">
          cuisines: <span className="font-semibold">{cuisines.join(", ")}</span>
        </p>
      </div>

      {menuCategories.map((category) => (
        < RestaurantCategory key={category?.card?.card?.title}  data={category?.card?.card} />
      ))}
    </>
  );
};

export default RestaurantMenu;
