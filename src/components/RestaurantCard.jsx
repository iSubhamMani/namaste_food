import { mediaAssetsURL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  return (
    <div className="res-card">
      <div className="res-card-pic">
        <img src={mediaAssetsURL + data.info.cloudinaryImageId} />
      </div>
      <div className="res-details">
        <h3 className="res-name">{data.info.name}</h3>
        <p className="res-cuisine">{data.info.cuisines.join(", ")}</p>
        <span className="res-rating">{data.info.avgRating}</span>
        <span className="estd">{data.info.sla.deliveryTime + " MINS"}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
