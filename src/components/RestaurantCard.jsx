import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  return (
    <div
      className="res-card shadow-lg min-h-full rounded-lg overflow-hidden transition ease-in-out bg-white
    hover:opacity-80 duration-300"
    >
      <div className="res-card-pic">
        <img
          src={MEDIA_ASSETS_URL + data.info.cloudinaryImageId}
          className=" w-full object-cover"
          style={{ height: 200 + "px" }}
        />
      </div>
      <div className="res-details px-2 py-4 flex flex-col justify-between gap-2">
        <h3 className="res-name text-lg text-[#143928] font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {data.info.name}
        </h3>
        <p className="res-cuisine text-zinc-600 font-normal text-ellipsis whitespace-nowrap overflow-hidden">
          {data.info.cuisines.join(", ")}
        </p>
        <span
          className="res-rating py-[0.2em] px-2 text-[#143928] w-min bg-yellow-200 flex items-center gap-1 font-medium
        "
        >
          {data.info.avgRating} <i class="fa-solid fa-star"></i>
        </span>
        <span className="estd text-zinc-600 font-medium flex items-center gap-1">
          <i class="fa-regular fa-clock"></i>{" "}
          {data.info.sla.deliveryTime + " MINS"}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
