import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Swiggy_URL } from "../Utils/constant";

const Body = () => {
  const [RestolistItem, setRestolistItem] = useState([]);

  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchRestro, setSearchRestro] = useState("");

  const [RestaurantName, setRestaurantName] = useState("");

  //whenever state variable update react trigger the reconcilation process(it will re-render component)

  console.log("Body Re-render");

  //it gives a cors error when you are starting this app and try to fetch API so that time you can install an cors extension in chrome and turn on that extension so it can bypass that headers and will run in local app.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
      const data = await fetch(Swiggy_URL);
      const json = await data.json();

      setRestolistItem(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestro(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching Data :", error);
    }
  };

  //conditional rendering
  // if (RestolistItem.length === 0) {
  //   return <ShimmerUi/>;
  // }

  const handleSearch = () => {
    //Filter the Restorent here and update the UI
    //search

    const Searchrestrobyinput = RestolistItem.filter((RestoItem) =>
      RestoItem.info.name.toLowerCase().includes(searchRestro.toLowerCase())
    );
    setFilteredRestro(Searchrestrobyinput);
    setSearchRestro(""); //to clear  the search input
    setRestaurantName(searchRestro);
  };

  const handleTopRestro = () => {
    const FilterRestorent = filteredRestro.filter((Items) => {
      return Items.info.avgRating >= 4.5;
    });
    setFilteredRestro(FilterRestorent);
  };

  const handleAllList = () => {
    setFilteredRestro(RestolistItem);
  };

  return RestolistItem.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">

          <input
            type="text"
            className="search-box"
            placeholder="Please Search Here"
            value={searchRestro}
            onChange={(event) => {
              setSearchRestro(event.target.value);
            }}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handleTopRestro}>
          Top Rated Restaurants
        </button>

        <button className="filter-btn" onClick={handleAllList}>
          All Restaurant
        </button>
      </div>

      <div className="res-container">

        {filteredRestro.length !== 0 ? (
          filteredRestro?.map((restorent) => {
            return (
              <RestaurantCard key={restorent.info.id} resData={restorent} />
            );
          })
        ) : (
          <h2>
            Sorry , we couldn't find any restaurant {RestaurantName} Please
            click on Search and add right name or see full Restaurant list
          </h2>
        )}
      </div>

    </div>
  );
};

export default Body;
