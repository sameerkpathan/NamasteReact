import { Img_CDN_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;

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
        <h4 className="overflow-hidden break-words text-ellipsis">{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
