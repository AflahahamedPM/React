import CDN_URL from "../utils/constants";

const RestaurentCard = (props) => {
  const { restaurentData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = restaurentData.info;
  return (
    <div className="restaurent-card">
      <img
        className="restaurent-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurent-logo"
      />
      <h3 className="restaurent-name">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurentCard;
