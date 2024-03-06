import { useState } from "react";

import MenuList from "./MenuList";

const RestaurantCategory = ({ data }) => {
  const [showMenuList, setShowMenuList] = useState(false);

  const handleClick = () => {
    setShowMenuList(!showMenuList);
  };

  return (
    <div className="w-7/12 mx-auto bg-gray-50 m-4 p-2 shadow-lg ">
      <div
        className="flex justify-between my-4 cursor-pointer"
        onClick={handleClick}
      >
        <h1>
          {data?.title} ({data?.itemCards?.length})
        </h1>
        {showMenuList ? (
          <i class="fa-solid fa-chevron-up"></i>
        ) : (
          <i class="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {showMenuList && (
        <MenuList
          key={data?.itemCards?.info?.id }
          items={data?.itemCards}
        />
      )}
    </div>
  );
};

export default RestaurantCategory;
