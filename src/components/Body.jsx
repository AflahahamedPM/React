import RestaurentCard from "./RestaurentCard";
import restaurentsList from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
