import { MEDIA_ASSETS_URL } from "../utils/constants";
import MenuItem from "./MenuItem";

const RestaurantCategory = (props) => {
  const { items, category } = props.data;

  return (
    <div className="menu-category border-t-2 border-gray-300 py-4">
      <div className="category-heading flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#143928]">{`${category?.card?.card?.title} (${items?.length})`}</h2>
        <span
          className="collapsable hover:bg-slate-200 py-2 transition ease-in-out duration-200"
          onClick={(e) => {
            e.target.classList.toggle("active");
            const menuList = e.target.parentNode.nextSibling;
            menuList.classList.toggle("collapse");
          }}
        ></span>
      </div>
      <MenuItem data={items} />
    </div>
  );
};

export default RestaurantCategory;
