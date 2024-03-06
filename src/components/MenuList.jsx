import { CDN_URL } from "../utils/constants";

const MenuList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className=" h-auto border-gray-200 border-b-2 flex justify-between">
          <div className="w-9/12">
            <div className="">
              <p className="font-semibold text-sm my-6">
                {item?.card?.info?.name}
              </p>
              <p className="text-sm my-2">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="font-thin text-xs my-2">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="p-4 m-4 w-3/12">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className=" p-2 m-2 rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
