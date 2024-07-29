import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestoMenu = () => {
  const { resID } = useParams();

  const  resMenu  = useRestaurantMenu(resID);

  if (resMenu === null) {
    return <ShimmerUi />;
  }

  //find restaurent name
  const { name, city, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  //find the restaurent item list
  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
