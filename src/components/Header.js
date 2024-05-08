import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // created a custom hook useOnline
  const isOnline = useOnline();

  const items = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Link to="#">
        <h1 className="font-semibold text-3xl my-5 mx-6">Food Villa</h1>
      </Link>

      <ul className="flex my-6">
        <Link to="/">
          <li className="px-3 font-semibold hover:font-bold">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-3 font-semibold hover:font-bold">About</li>
        </Link>
        <Link to="/contact">
          <li className="px-3 font-semibold hover:font-bold">Contact</li>
        </Link>
        <Link to="/cart">
          <li className="px-3  font-semibold hover:font-bold">Cart - {items.length}</li>
        </Link>
        <Link to="/instaMart">
          <li className="px-3  font-semibold hover:font-bold">InstaMart</li>
        </Link>
      </ul>

      <h1 className="my-6">{isOnline ? "✅Online" : "❎Offline"}</h1>

      {isLoggedIn ? (
        <button
          className="bg-pink-300 mr-5 h-12 w-20 mt-4
           rounded-md hover:bg-white"
          onClick={function () {
            setIsLoggedIn(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          className="bg-pink-300 mr-5 h-12 w-20 mt-4
           rounded-md hover:bg-white"
          onClick={function () {
            setIsLoggedIn(true);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
