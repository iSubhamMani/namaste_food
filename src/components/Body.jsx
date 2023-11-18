import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.9952704&lng=88.1414239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const fdata = await data.json();

    setListOfRes(
      fdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      fdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="container column">
        <div className="filter-container">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search restaurants"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <span
              className="search-btn"
              onClick={() => {
                // Search
                // Input value
                const filteredRes = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredRes);
              }}
            ></span>
          </div>
          <div className="top-rated-res">
            <button
              className="top-rated-btn"
              onClick={(e) => {
                if (e.target.classList.toggle("active")) {
                  const filteredList = listOfRes.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilteredRes(filteredList);
                } else {
                  setFilteredRes(listOfRes);
                }
              }}
            >
              Top Rated
            </button>
          </div>
        </div>

        <div className="res-container">
          {filteredRes.map((res) => {
            return <RestaurantCard key={res.info.id} data={res} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
