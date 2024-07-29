import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiggy_MENU_URL } from "../Utils/constant";
import ShimmerUi from "./ShimmerUi";

const RestoMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resItemList, setResItemList] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const data = await fetch(Swiggy_MENU_URL + resID);
      const jsondata = await data.json();

      
      setResMenu(jsondata?.data?.cards[2]?.card?.card?.info);
      setResItemList(
        jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  if (resMenu === null) {
    return <ShimmerUi />;
  }

  //find restaurent name 
  const { name, city, cuisines, costForTwoMessage } = resMenu;

  //find the restaurent item list
  const { itemCards } = resItemList;
  

  return (
    <div>
      <h1>Restaurent Name {name}</h1>
      <h2>Location is {city} </h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h3>Menu</h3>
      {itemCards.map((element) => {
        return (
          <div key={element.card.info.id}>
            <p>
              {element.card.info.name} Rs -{" "}
              {element.card.info.price / 100 ||
                element.card.info.defaultPrice / 100}
            </p>
            <p>{element.card.info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RestoMenu;
