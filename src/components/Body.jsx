import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // If empty dependency array, useEffect is called only on the initial render

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );

  return filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-4">
      <div className="w-[70%] mx-auto max-w-screen-xl flex flex-col">
        <div className="flex gap-4 mt-4 mb-8 items-center ">
          <div
            className="search-bar border-2 border-zinc-400 px-4 py-1 flex gap-4 justify-between rounded-full
           focus-within:border-[#25E28D]"
          >
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Search restaurants"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <span
              onClick={() => {
                // Search
                // Input value
                const filteredRes = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredRes);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="top-rated-res">
            <button
              className="px-4 py-1 border-2 transition ease-in-out hover:scale-110
               hover:bg-[#25E28D] duration-200 hover:text-white whitespace-nowrap hover:shadow-sm
               "
              style={{ borderRadius: 100 + "px" }}
              onClick={(e) => {
                if (e.target.classList.toggle("active")) {
                  e.target.style.backgroundColor = "#25E28D";
                  e.target.style.color = "#FFF";
                  const filteredList = listOfRes.filter(
                    (res) => res.info.avgRating >= 4.4
                  );
                  setFilteredRes(filteredList);
                } else {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#000";
                  setFilteredRes(listOfRes);
                }
              }}
            >
              Top Rated
            </button>
          </div>
        </div>

        <div
          className="res-container gap-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
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
