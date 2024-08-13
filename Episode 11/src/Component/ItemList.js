import { Img_CDN_URL } from "../Utils/constant";
console.log(Img_CDN_URL);

const ItemList = ({ ItemLists }) => {
  console.log(ItemLists);
  return (
    <div>
      {ItemLists.map((Element) => {
        return (
          <div
            key={Element?.card?.info?.id}
            className="p-2 m-2 text-left flex justify-between border-gray-300 border-b-2"
          >
            <div className="w-9/12 p-4">
              <div className="py-2">
                <span>{Element?.card?.info?.name}</span>
                <span>
                  <span className="font-bold"> ₹ </span>
                  {Element.card.info.price
                    ? Element?.card?.info?.price / 100
                    : Element?.card?.info?.defaultPrice / 100}
                </span>
                {Element?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <h4>
                    ⭐{Element?.card?.info?.ratings?.aggregatedRating?.rating}
                  </h4>
                ) : (
                  <h4>
                    {Element?.card?.info?.ratings?.aggregatedRating?.rating}
                  </h4>
                )}
              </div>
              
                <p className="text-xs">{Element?.card?.info?.description}</p>
              
            </div>

            <div className="w-3/12 p-4" >
              <img src={Img_CDN_URL + Element.card.info.imageId} className="w-full rounded" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
