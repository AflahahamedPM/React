import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [restaurentsList, setRestaurentLists] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredLists = restaurentsList.filter(
              (restaurent) => restaurent.info.avgRating > 4.4
            );
            setRestaurentLists(filteredLists);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurent-container">
        {restaurentsList.map((restaurent) => (
          <RestaurentCard
            key={restaurent.info.id}
            restaurentData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
