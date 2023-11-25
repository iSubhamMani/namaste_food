import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  return (
    <div
      className="res-card shadow-lg min-h-full rounded-lg overflow-hidden transition ease-in-out bg-white
    hover:bg-zinc-50 hover:scale-105 duration-300"
    >
      <div className="res-card-pic">
        <img
          src={MEDIA_ASSETS_URL + data.info.cloudinaryImageId}
          className=" w-full object-cover"
          style={{ height: 200 + "px" }}
        />
      </div>
      <div className="res-details px-2 py-4">
        <h3 className="res-name">{data.info.name}</h3>
        <p className="res-cuisine">{data.info.cuisines.join(", ")}</p>
        <span className="res-rating">{data.info.avgRating}</span>
        <span className="estd">{data.info.sla.deliveryTime + " MINS"}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
