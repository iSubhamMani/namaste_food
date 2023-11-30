import MenuItems from "./MenuItems";

const RestaurantCategory = ({ data, showItems, setShowIndex, hideItems }) => {
  const { items, category } = data;

  const handleClick = () => {
    showItems ? hideItems() : setShowIndex();
  };

  return (
    <div className="menu-category border-t-2 border-gray-300 py-4">
      <div
        className="category-heading flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-xl font-bold text-[#143928]">{`${category?.card?.card?.title} (${items?.length})`}</h2>
        <i className="fa-solid fa-chevron-down p-1"></i>
      </div>
      {showItems && <MenuItems data={items} />}
    </div>
  );
};

export default RestaurantCategory;
