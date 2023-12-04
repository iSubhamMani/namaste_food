import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  return (
    <div
      data-testid="res-card"
      className="res-card shadow-lg min-h-full rounded-lg overflow-hidden transition ease-in-out bg-white
    hover:bg-[#ffebf1] duration-300"
    >
      <div className="res-card-pic">
        <img
          src={MEDIA_ASSETS_URL + data.info.cloudinaryImageId}
          className="w-full object-cover"
          style={{ height: 200 + "px" }}
        />
      </div>
      <div className="res-details px-2 py-4 flex flex-col justify-between gap-2">
        <h3 className="res-name text-xl text-[#F8366D] font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {data.info.name}
        </h3>
        <p className="res-cuisine text-slate-500 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          {data.info.cuisines.join(", ")}
        </p>
        <span
          className="res-rating py-[0.2em] px-[0.5em] text-white w-min bg-[#3D006B] flex items-center gap-1 font-medium
        "
        >
          {data.info.avgRating} <i className="fa-solid fa-star"></i>
        </span>
        <span className="estd text-[#3D006B] font-medium flex items-center gap-1">
          <i className="fa-regular fa-clock"></i>{" "}
          {data.info.sla.deliveryTime + " MINS"}
        </span>
      </div>
    </div>
  );
};

// Higher Order Component

// input - a restaurant card
// output - a restaurant card with offers included

export const withOffersHeader = (RestaurantCard) => {
  return (props) => {
    const offers =
      props.data.info.aggregatedDiscountInfoV3 ||
      props.data.info.aggregatedDiscountInfoV2;

    return (
      <div>
        <label className="px-2 py-1 rounded-ss-lg text-[0.9rem] font-bold absolute bg-[#3D006B] text-white">{`${offers.header}  ${offers.subHeader}`}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
