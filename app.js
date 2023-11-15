import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container row">
        <div className="logo-container">
          <img className="logo" src={logo} />
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

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header*/}
      <Header />
      {/* Body*/}
      {/* Footer*/}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
