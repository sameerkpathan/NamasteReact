import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestoMenu = () => {
  const { resID } = useParams();

  const resMenu = useRestaurantMenu(resID);



  if (resMenu === null) {
    return <ShimmerUi />;
  }

  //find restaurent name
  const { name, city, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  //find the restaurent item list
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const FilterCard = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cardType)=>(
      cardType?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))

    // console.log(FilterCard);

  return (
    <div className="p-4 m-4  text-center ">
      <div className="m-3 p-2">
        <h1 className="font-bold text-2xl" >
           {name}
        </h1>

        <p className="py-5 font-bold text-lg">
          <spam > Cuisines </spam>: {cuisines.join(", ")} -{" "}
          {costForTwoMessage}
        </p>
      </div>

      {/* Now we can build a logic for accordian */}

      {FilterCard.map((Element)=>{
        return(
           <RestaurantCategories key={Element?.card?.card?.title}   ResCategori = {Element?.card?.card} /> 
        
            
        )
      })}
      
    </div>
  );
};

export default RestoMenu;
