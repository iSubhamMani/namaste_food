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
            data-testid="menu-item"
            key={item.card?.info?.id}
            className="menu-item mt-8 flex justify-between p-4 rounded-lg transition ease-in-out duration-200
                  border-t-2 border-zinc-200"
          >
            <div className="self-start">
              <h3 className="text-lg font-bold text-[#1F4172]">
                {item.card?.info?.name}
              </h3>
              <div className="flex flex-col  gap-[0.4em]">
                <span className="py-[0.2em] text-lg font-bold">
                  ₹{" "}
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100}
                </span>
                <div className="flex items-center gap-2">
                  <span className="py-[0.2em] px-2 text-[#FDF0F0] bg-[#1F4172] font-bold text-sm flex gap-1 items-center">
                    {item.card?.info?.ratings?.aggregatedRating?.rating}
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="font-bold text-sm text-[#132043]">
                    {item.card?.info?.ratings?.aggregatedRating?.ratingCount}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
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
                  className="w-full py-1 px-4 hover:cursor-pointer bg-[#FDF0F0] text-[#fb4157] font-medium rounded-full shadow-lg border-2 border-[#fb4157] hover:bg-[#F1B4BB] transition ease-in-out duration-300"
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
