import {CDN_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { restaurentData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, id} = restaurentData?.info;
  return (
    <div className=" w-[250px] p-6 m-2 bg-gray-100 rounded-lg hover:bg-gray-300">
      <Link to={`/restaurant/${id}`}>
      <img
        className="w-[200px] h-fit rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurent-logo"
      />
      <h3 className="py-3 text-lg font-semibold">{name}</h3>
      <h5 className="restaurent-cuisine">{cuisines.join(", ")}</h5>
      <h5 className="restaurent-rating">{avgRating} Stars</h5>
      <h4 className="restaurent-deliverytime">{sla.deliveryTime} Minutes</h4>
      </Link>
    </div>
  );
};

export default RestaurentCard;
