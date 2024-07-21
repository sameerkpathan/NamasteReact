import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/mockData";
import { useState } from "react";

const Body = () => {

  const RestoList = [
    {
      info: {
        id: "10894",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.7,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        deliveryTime: 31,
      },
    },
    {
      info: {
        id: "108946",
        name: "Dominos ",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹450 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.7",
        totalRatingsString: "10K+",
        deliveryTime: 31,
      },
    },
  ]

  const[RestolistItem,setRestolistItem]=useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const FilterRestorent = RestolistItem.filter((Items)=>{
            return  Items.info.avgRating > 4.3
            });
            setRestolistItem(FilterRestorent)
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="filter-bbtn"
        onClick={()=>{
          
          setRestolistItem(restaurantList);
        }}
        >
          All Restaurant
        </button>
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
