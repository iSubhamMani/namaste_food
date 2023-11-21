import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variable
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // If empty dependency array, useEffect is called only on the initial render

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.511774&lng=88.3998203&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  return filteredRes.length === 0 ? (
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
                    (res) => res.info.avgRating >= 4.4
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
            return (
              <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                <RestaurantCard data={res} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
