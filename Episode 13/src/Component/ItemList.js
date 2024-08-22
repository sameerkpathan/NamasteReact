import { useDispatch } from "react-redux";
import { Img_CDN_URL } from "../Utils/constant";
import { addItems } from "../Utils/ReduxToolkit/cartSlice";
import { Link } from "react-router-dom";

const ItemList = ({ ItemLists }) => {
  
  const dispatch = useDispatch();

  const handleDispatchClick = (ItemElement) => {
    //now with the help of dispatch we can call the actiontype
    //so in the perticular action we can pass payload also so it will be goes in dispatch function update the action and last it will update the store

    dispatch(addItems(ItemElement));
  };

  return (
    <div>
      {ItemLists.map((ItemElement) => {
        return (
          <div
            key={ItemElement?.card?.info?.id}
            className="p-2 m-2 text-left flex justify-between border-gray-300 border-b-2"
          >
            <div className="w-8/12 p-4">
              <div className="py-2">
                <span>{ItemElement?.card?.info?.name}</span>
                <span>
                  <span className="font-bold"> ₹ </span>
                  {ItemElement.card.info.price
                    ? ItemElement?.card?.info?.price / 100
                    : ItemElement?.card?.info?.defaultPrice / 100}
                </span>
                {ItemElement?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <h4>
                    ⭐
                    {ItemElement?.card?.info?.ratings?.aggregatedRating?.rating}
                  </h4>
                ) : (
                  <h4>
                    {ItemElement?.card?.info?.ratings?.aggregatedRating?.rating}
                  </h4>
                )}
              </div>

              <p className="text-xs">{ItemElement?.card?.info?.description}</p>
            </div>

            <div className="w-4/12 p-4">
                <div className="absolute">
                  <button
                    className="bg-white p-2 text-green-500 rounded-md mt-0  m-auto font-bold text-lg"
                    onClick={() => handleDispatchClick(ItemElement)}
                  >
                    ADD +
                  </button>
                </div>
              <img
                src={Img_CDN_URL + ItemElement.card.info.imageId}
                className="w-full h-60 rounded"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
