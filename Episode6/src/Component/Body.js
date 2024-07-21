import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [RestolistItem, setRestolistItem] = useState([]);

  const[filteredRestro,setFilteredRestro] = useState([]);
  const[searchRestro,setSearchRestro]= useState("");

  //whwenever state variable update react trigger the reconcilation process(it will re-render component)

  console.log("Body Re-render");

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
    setFilteredRestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )

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

        <div className="search">
            <input type="text" className="search-box" placeholder="Please Search Here" value={searchRestro} onChange={(event)=>{setSearchRestro(event.target.value)}} />
            <button className="search-btn" onClick={()=>{
              //Filter the Restorent here and update the UI
              //search
              const Searchrestrobyinput = RestolistItem.filter((RestoItem)=> RestoItem.info.name.toLowerCase().includes(searchRestro.toLowerCase()));
              setFilteredRestro(Searchrestrobyinput);
              console.log(searchRestro)
            }}>Search</button>
        </div>

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
        <button className="filter-btn" onClick={()=>{console.log("All List")}}>All Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestro?.map((restorent) => {
          return <RestaurantCard key={restorent.info.id} resData={restorent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
