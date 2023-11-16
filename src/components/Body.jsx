import RestaurantCard from "./RestaurantCard";
import { SearchBar } from "./SearchBar";
import resData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="container column">
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="res-container">
          {resData.map((res) => {
            return <RestaurantCard data={res} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
