import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList?.map((restorent) => {
          return <RestaurantCard key={restorent.info.id} resData={restorent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
