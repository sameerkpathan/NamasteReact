import { Link } from "react-router-dom";
import { Img_CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla,resID } = resData?.info;
  return (
    <Link to={"/restaurants/"+ resID}>
    <div className="res-card">
      <img
        className="res-logo"
        src={Img_CDN_URL+resData.info.cloudinaryImageId}
        />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
        </Link>
  );
};

export default RestaurantCard;
