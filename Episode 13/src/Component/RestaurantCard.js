import { useContext } from "react";
import { Img_CDN_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo, sla, id } = resData?.info;
  return (
    <Link to={"/restaurants/" + id}>
      <div className="p-4 m-4 w-[250px] h-[505px]  rounded border border-gray-300 bg-gray-100 hover:bg-slate-300 overflow-hidden ">
        <img
          className="rounded h-[250px]"
          src={Img_CDN_URL + resData.info.cloudinaryImageId}
          alt="Food Image"
        />
        <h3 className=" font-bold py-2 text-lg ">{name}</h3>
        <h4 className="overflow-hidden break-words text-ellipsis">
          {cuisines.join(",")}
        </h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <p>Name : {loggedInUser}</p>
      </div>
    </Link>
  );
};

//We create Higher Order Component which takes above function as argument and return a component

//Takes Input ==> RestaurantCard   output ==> Gives Card have Discount Offer

export const WithOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <div className="bg-gray-400 absolute text-black-400 rounded ml-4 mb-0 h-11 w-50%">
          <label className="m-1">{header}</label>
          <label>{subHeader}</label>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
