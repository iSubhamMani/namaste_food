import { useState } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="bg-neutral-50 p-4 border-b-2 border-gray-40 shadow-lg">
      <div className="w-4/5 mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="logo-container">
            <img className="w-16" src={logo} />
          </div>
          <div className="brand-container">
            <h1 className="brand-text whitespace-nowrap">Namaste Food</h1>
          </div>
        </div>
        <div className="nav-items">
          <ul className="flex gap-4 ">
            <li className="hover:text-[#1fa468] whitespace-nowrap">
              <Link to="/groceries">Grocery</Link>
            </li>
            <li className="hover:text-[#1fa468] whitespace-nowrap">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#1fa468] whitespace-nowrap">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-[#1fa468] whitespace-nowrap">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="hover:text-[#1fa468] whitespace-nowrap">Cart</li>
            <button
              className="login-btn hover:text-[#1fa468]"
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
