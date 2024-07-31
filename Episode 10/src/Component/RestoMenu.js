import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

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

  return (
    <div className="p-4 m-4 overflow-hidden ">
      <div>
        <h1>
          {" "}
          <span className="font-bold">Restaurent </span> Name : {name}
        </h1>
        <h2>
          <span className="font-bold"> Location </span> : {city}{" "}
        </h2>

        <p>
          <spam className="font-bold"> Cuisines </spam>: {cuisines.join(", ")} -{" "}
          {costForTwoMessage}
        </p>
      </div>
      <div>
        <h3 className="text-center font-bold p-2 m-2 ">Menu</h3>
        {itemCards.map((element) => {
          return (
            <div
              className="p-2 m-3 bg-gray-100 border border-gray-300 h-[100px] "
              key={element.card.info.id}
            >
              <p>
                {element.card.info.name} Rs -{" "}
                <span className="font-bold">
                  {" "}
                  {element.card.info.price / 100 ||
                    element.card.info.defaultPrice / 100}{" "}
                </span>
              </p>
              <p className="overflow-hidden break-words text-ellipsis">
                {element.card.info.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoMenu;
