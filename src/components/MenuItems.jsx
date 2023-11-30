import { MEDIA_ASSETS_URL } from "../utils/constants";

const MenuItems = (props) => {
  const items = props.data;
  return (
    <ul className="menu-list">
      {items?.map((item) => {
        return (
          <li
            key={item.card?.info?.id}
            className="menu-item mt-8 flex justify-between hover:cursor-pointer hover:bg-slate-200 p-4 rounded-lg transition ease-in-out duration-300
                  border-t-2 border-zinc-200"
          >
            <div className="self-start">
              <h3 className="text-lg font-medium">{item.card?.info?.name}</h3>
              <div className="flex flex-col  gap-[0.4em]">
                <span className="py-[0.2em] text-lg font-bold">
                  ₹{" "}
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100}
                </span>
                <div className="flex items-center gap-2">
                  <span className="py-[0.2em] px-2 text-white bg-[#1a8756] font-medium text-sm flex gap-1 items-center">
                    {item.card?.info?.ratings?.aggregatedRating?.rating}
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="font-medium text-sm">
                    {item.card?.info?.ratings?.aggregatedRating?.ratingCount}
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
  );
};

export default MenuItems;
