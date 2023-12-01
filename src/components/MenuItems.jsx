import { useDispatch } from "react-redux";
import { MEDIA_ASSETS_URL } from "../utils/constants";
import { addItem } from "../utils/slices/cartSlice";

const MenuItems = (props) => {
  const items = props.data;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item)); // action.payload
  };

  return (
    <ul className="menu-list">
      {items?.map((item) => {
        return (
          <li
            key={item.card?.info?.id}
            className="menu-item mt-8 flex justify-between hover:bg-gray-100 p-4 rounded-lg transition ease-in-out duration-200
                  border-t-2 border-zinc-200"
          >
            <div className="self-start">
              <h3 className="text-lg font-medium text-[#F8366D]">
                {item.card?.info?.name}
              </h3>
              <div className="flex flex-col  gap-[0.4em]">
                <span className="py-[0.2em] text-lg font-bold">
                  ₹{" "}
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100}
                </span>
                <div className="flex items-center gap-2">
                  <span className="py-[0.2em] px-2 text-white bg-[#3D006B] font-medium text-sm flex gap-1 items-center">
                    {item.card?.info?.ratings?.aggregatedRating?.rating}
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="font-medium text-sm">
                    {item.card?.info?.ratings?.aggregatedRating?.ratingCount}
                  </span>
                </div>
              </div>
            </div>
            <div>
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
              <div className="text-center my-2">
                <button
                  className="w-full py-1 px-4 hover:cursor-pointer bg-[#3D006B] text-white rounded-full"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
