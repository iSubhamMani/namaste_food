import RestaurantCard from "./RestaurantCard";
import { SearchBar } from "./SearchBar";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable
  const [listOfRes, setListOfRes] = useState(resData);

  return (
    <div className="body">
      <div className="container column">
        <div className="filter-container">
          <SearchBar setListOfRes={setListOfRes} />
          <div className="top-rated-res">
            <button
              className="top-rated-btn"
              onClick={(e) => {
                if (e.target.classList.toggle("active")) {
                  const filteredList = resData.filter((res) => res.rating > 4);
                  setListOfRes(filteredList);
                } else {
                  setListOfRes(resData);
                }
              }}
            >
              Top Rated
            </button>
          </div>
        </div>

        <div className="res-container">
          {listOfRes.map((res) => {
            return <RestaurantCard key={res.uid} data={res} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
