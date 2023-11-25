import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, locality } =
    resInfo?.cards[0]?.card?.card?.info;

  const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <div className="menu-container column">
        <div className="res-overview">
          <div className="name-rating">
            <h2>{name}</h2>
            <span className="res-rating">{avgRating}</span>
          </div>
          <div className="food-overview">
            <p>{cuisines?.join(", ")}</p>
            <p>{locality}</p>
            <p>{costForTwoMessage}</p>
          </div>
        </div>
        <ul>
          {menu.slice(1, -3).map((category, index) => {
            const items = category.card?.card?.itemCards;
            return (
              <div className="menu-category">
                <div className="category-heading">
                  <h2>{`${++index}. ${category.card?.card?.title} (${
                    items?.length
                  })`}</h2>
                  <span
                    className="collapsable"
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
                      <li key={item.card?.info?.id} className="menu-item">
                        <h3>{item.card?.info?.name}</h3>
                        <p>₹ {item.card?.info?.price / 100}</p>
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
