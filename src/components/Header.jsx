import image from "../images/logoImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Log In");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} />
      </div>
      <div className="nav-items">
        <ul className="nav-routes">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log Out")
                : setBtnName("Log In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
