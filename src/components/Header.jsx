import image from "../images/logoImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Log In");
  return (
    <div className="header flex justify-between">
      <div className="items-center mr-24">
        <img className="logo ml-8 mt-4 w-24" src={image} />
      </div>
      <div className="flex items-center">
        <ul className="nav-routes flex mr-36 gap-16 mt-8 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
