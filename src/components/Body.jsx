import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
import { RESTAURANT_DATA_URL } from "../utils/constants";

const BodyComponent = () => {
  const [restaurentsList, setRestaurentLists] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  return restaurentsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search"
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
        </div>
        <button
          className="filter-btn"
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
      <div className="restaurent-container">
        {filteredList.map((restaurent) => (
          < RestaurentCard
            key={restaurent.info.id}
            restaurentData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
