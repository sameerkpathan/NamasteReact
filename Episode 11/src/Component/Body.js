import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Swiggy_URL } from "../Utils/constant";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [RestolistItem, setRestolistItem] = useState([]);

  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchRestro, setSearchRestro] = useState("");

  const [RestaurantName, setRestaurantName] = useState("");

  const onlineStatus = useOnlineStatus();

  //whenever state variable update react trigger the reconcilation process(it will re-render component)

  console.log("Restorent list",RestolistItem);

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

  //costom hook logic is here

  if (onlineStatus === false) {
    return (
      <p>
        Oops looks like you are offline please check your Internet
        connection....!!!
      </p>
    );
  }

  return RestolistItem.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="m-4 p-4">
          <input
            type="text"
            className="px-4 border border-solid border-b-gray-400 border-b-3 "
            placeholder="Please Search Here"
            value={searchRestro}
            onChange={(event) => {
              setSearchRestro(event.target.value);
            }}
          />

          <button
            className="px-4 py-2 ml-4 bg-green-100 rounded "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="px-4 py-2 mr-5   bg-gray-100 rounded"
            onClick={handleTopRestro}
          >
            Top Rated Restaurants
          </button>

          <button
            className="px-4 py-2 ml-2 bg-gray-100 rounded"
            onClick={handleAllList}
          >
            All Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
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
