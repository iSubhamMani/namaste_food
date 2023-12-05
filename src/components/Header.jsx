import { useEffect, useState } from "react";
import logo from "../utils/img/logo_128.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items); // subscribing to a specific portion of the store

  const changeHeaderOnScroll = () => {
    const header = document.getElementById("header");
    const navItems = document.querySelectorAll(".nav-item");
    const brandText = document.querySelector(".brand-text");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#132043";
        header.style.borderBottom = "4px solid #F1B4BB";
        brandText.style.color = "#FDF0F0";

        navItems.forEach((item) => {
          item.style.color = "#FDF0F0";
        });
      } else {
        header.style.backgroundColor = "#FFF";
        header.style.borderBottom = "4px solid transparent";
        brandText.style.color = "#132043";

        navItems.forEach((item) => {
          item.style.color = "#132043";
        });
      }
    });
  };

  useEffect(() => {
    changeHeaderOnScroll();
  }, []);

  return (
    <div
      id="header"
      className="bg-white p-4 sticky top-0 z-10 transition ease-in-out duration-300 border-b-[2px] border-transparent"
    >
      <div className="w-4/5 mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="logo-container">
            <img className="w-16" src={logo} />
          </div>
          <div className="brand-container">
            <h1 className="brand-text whitespace-nowrap text-2xl font-bold text-[#132043]">
              Quick Bites
            </h1>
          </div>
        </div>
        <div className="nav-items">
          <ul className="flex gap-4 ">
            <li
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
            transition ease-in-out hover:border-b-[#fb4157]"
            >
              <Link to="/groceries">Grocery</Link>
            </li>
            <li
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
            transition ease-in-out hover:border-b-[#fb4157]"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
            transition ease-in-out hover:border-b-[#fb4157]"
            >
              <Link to="/about">About us</Link>
            </li>
            <li
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
            transition ease-in-out hover:border-b-[#fb4157]"
            >
              <Link to="/contact">Contact us</Link>
            </li>
            <li
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
            transition ease-in-out hover:border-b-[#fb4157] flex items-center"
            >
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i> (
                {cartItems.length})
              </Link>
            </li>
            <button
              className="nav-item text-[#132043] border-b-2 border-b-transparent whitespace-nowrap font-semibold
              transition ease-in-out hover:border-b-[#fb4157]"
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
