import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MEDIA_ASSETS_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu py-8 px-4">
      <div className="w-[60%] px-4 py-8 mx-auto max-w-screen-xl flex flex-col bg-gray-50 rounded-lg shadow-md">
        <div className="res-overview">
          <div className="name-rating flex justify-between items-center">
            <h2 className="font-semibold text-3xl text-black">{name}</h2>
            <span className="py-[0.2em] px-2 text-white bg-[#1a8756] font-medium">
              {avgRating} <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="food-overview flex flex-col gap-1 mt-4 mb-[50px]">
            <span className="text-zinc-600 ">{cuisines?.join(", ")}</span>
            <span className="text-zinc-600 font-medium flex gap-[0.4em] items-center">
              <i className="fa-solid fa-location-dot"></i>
              {areaName}
            </span>
            <div>
              <span className="py-[0.2em] font-bold text-lg flex gap-[0.4em] items-center">
                <i className="fa-solid fa-bolt"></i>
                {costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
        <ul>
          {menu.slice(1, -3).map((category, index) => {
            const items =
              category.card?.card?.itemCards ||
              category.card?.card?.categories[0]?.itemCards;
            return (
              <div className="menu-category border-t-2 border-gray-300 py-4">
                <div className="category-heading flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#143928]">{`${++index}. ${
                    category.card?.card?.title
                  } (${items?.length})`}</h2>
                  <span
                    className="collapsable hover:bg-slate-200 py-2 transition ease-in-out duration-200"
                    onClick={(e) => {
                      e.target.classList.toggle("active");
                      const menuList = e.target.parentNode.nextSibling;
                      menuList.classList.toggle("collapse");
                    }}
                  ></span>
                </div>
                <ul className="menu-list">
                  {items?.map((item) => {
                    return (
                      <li
                        key={item.card?.info?.id}
                        className="menu-item mt-8 flex justify-between hover:cursor-pointer hover:bg-slate-200 p-4 rounded-lg transition ease-in-out duration-300
                        border-t-2 border-zinc-200"
                      >
                        <div className="self-start">
                          <h3 className="text-lg font-medium">
                            {item.card?.info?.name}
                          </h3>
                          <div className="flex flex-col  gap-[0.4em]">
                            <span className="py-[0.2em] text-lg font-bold">
                              ₹{" "}
                              {(item.card?.info?.price ||
                                item.card?.info?.defaultPrice) / 100}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="py-[0.2em] px-2 text-white bg-[#1a8756] font-medium text-sm flex gap-1 items-center">
                                {
                                  item.card?.info?.ratings?.aggregatedRating
                                    ?.rating
                                }
                                <i className="fa-solid fa-star"></i>
                              </span>
                              <span className="font-medium text-sm">
                                {
                                  item.card?.info?.ratings?.aggregatedRating
                                    ?.ratingCount
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-32 h-32 rounded-lg overflow-hidden">
                          {item.card?.info?.imageId !== undefined ? (
                            <img
                              src={MEDIA_ASSETS_URL + item.card?.info?.imageId}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img
                              src="https://assets-global.website-files.com/64a26163e7f60775e3548a04/64a287398e53b9cd0c94f13a_placeholder.png"
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
