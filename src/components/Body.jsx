import RestaurantCard from "./RestaurantCard";
import { SearchBar } from "./SearchBar";
import {
  HAZRAT_IMG,
  ARSALAN_IMG,
  PALLI_BANGALI,
  DOMINOS_IMG,
} from "../utils/constants";

const Body = () => {
  return (
    <div className="body">
      <div className="container column">
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="res-container">
          <RestaurantCard
            img={HAZRAT_IMG}
            resName="Hazrat"
            cuisine="Biriyani, North Indian"
            rating="4.5"
            estd="40 MINS"
          />
          <RestaurantCard
            img={ARSALAN_IMG}
            resName="Arsalan"
            cuisine="Biriyani, North Indian"
            rating="4.8"
            estd="36 MINS"
          />
          <RestaurantCard
            img={PALLI_BANGALI}
            resName="Palli Bangali"
            cuisine="Bengali, Thali"
            rating="4.1"
            estd="20 MINS"
          />
          <RestaurantCard
            img={DOMINOS_IMG}
            resName="Domino's"
            cuisine="Italian, Pizza"
            rating="4.0"
            estd="30 MINS"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
