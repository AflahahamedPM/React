import { useState, useEffect } from "react";

import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_DATA_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [restaurentsList, setRestaurentLists] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const EnhancedRestaurantCard = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch(RESTAURANT_DATA_URL);
    const json = await data.json();
    setRestaurentLists(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!! Check your internet connection</h1>
    );

  return restaurentsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search-container m-4">
          <input
            className="border border-solid border-black rounded-md m-4 p-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              const filteredLists = restaurentsList.filter((restaurant) =>
                restaurant.info.name
                  .toUpperCase()
                  .includes(searchText.toUpperCase())
              );
              setFilteredList(filteredLists);
            }}
          >
            Search
          </button>

          <button
            className="py-2.5 ml-9 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              const filteredLists = restaurentsList.filter(
                (restaurent) => restaurent.info.avgRating > 4.4
              );
              setFilteredList(filteredLists);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 ml-6">
        {filteredList.map((restaurent) =>
          restaurent?.info?.promoted ? (
            <EnhancedRestaurantCard
              key={restaurent?.info?.id}
              restaurentData={restaurent}
            />
          ) : (
            <RestaurentCard
              key={restaurent?.info?.id}
              restaurentData={restaurent}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
