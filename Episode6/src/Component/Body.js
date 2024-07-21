import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [RestolistItem, setRestolistItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    //optional chaining
    
    setRestolistItem(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  // if (RestolistItem.length === 0) {
  //   return <ShimmerUi/>;
  // }

  return RestolistItem.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilterRestorent = RestolistItem.filter((Items) => {
              return Items.info.avgRating >= 4.5;
            });
            setRestolistItem(FilterRestorent);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="filter-bbtn">All Restaurant</button>
      </div>
      <div className="res-container">
        {RestolistItem?.map((restorent) => {
          return <RestaurantCard key={restorent.info.id} resData={restorent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
