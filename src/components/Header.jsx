import { useState, useContext } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="bg-white p-4 border-b-2 border-gray-40 shadow-lg">
      <div className="w-4/5 mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="logo-container">
            <img className="w-16" src={logo} />
          </div>
          <div className="brand-container">
            <h1 className="brand-text whitespace-nowrap text-xl font-medium text-[#1a8756]">
              Namaste Food
            </h1>
          </div>
        </div>
        <div className="nav-items">
          <ul className="flex gap-4 ">
            <li
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
            transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
            >
              <Link to="/groceries">Grocery</Link>
            </li>
            <li
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
            transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
            transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
            >
              <Link to="/about">About us</Link>
            </li>
            <li
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
            transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
            >
              <Link to="/contact">Contact us</Link>
            </li>
            <li
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
            transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
            >
              {loggedInUser}
            </li>
            <button
              className="text-[#1a8756] border-b-2 border-b-transparent hover:text-[#143928] whitespace-nowrap font-medium
              transition ease-in-out hover:border-b-2 hover:border-b-[#143928]"
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
