import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container row">
        <div className="brand">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <div className="brand-container">
            <h1 className="brand-text">Namaste Food</h1>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ img, resName, cuisine, rating, estd }) => {
  return (
    <div className="res-card">
      <div className="res-card-pic">
        <img src={img} />
      </div>
      <div className="res-details">
        <h3 className="res-name">{resName}</h3>
        <p className="res-cuisine">{cuisine}</p>
        <span className="res-rating">{rating}</span>
        <span className="estd">{estd}</span>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search restaurants"
      />
      <span className="search-icon"></span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="container column">
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="res-container">
          <RestaurantCard
            img="https://www.allrecipes.com/thmb/G96Vc_7F5Dm0csJJb2STC6tO97k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-49-79b33da67e2643e8b585972cd92c5821.jpg"
            resName="Hazrat"
            cuisine="Biriyani, North Indian"
            rating="4.5"
            estd="40 MINS"
          />
          <RestaurantCard
            img="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
            resName="Arsalan"
            cuisine="Biriyani, North Indian"
            rating="4.8"
            estd="36 MINS"
          />
          <RestaurantCard
            img="https://mitracafe.co.in/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-05-at-10.07.37-9.jpeg"
            resName="Palli Bangali"
            cuisine="Bengali, Thali"
            rating="4.1"
            estd="20 MINS"
          />
          <RestaurantCard
            img="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
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

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header*/}
      <Header></Header>
      <Body></Body>
      {/* Footer*/}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
