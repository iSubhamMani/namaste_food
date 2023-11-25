import { useState } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

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
            <li>
              <Link to="/groceries">Grocery</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
