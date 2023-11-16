import logo from "../utils/logo.png";

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

export default Header;
