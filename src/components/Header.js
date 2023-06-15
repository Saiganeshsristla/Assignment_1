import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // created a custom hook useOnline
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Link to="#">
        <h1 className="font-semibold text-3xl my-5 mx-6">Food Villa</h1>
      </Link>

      <ul className="flex my-6">
        <Link to="/">
          <li className="px-3">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-3">About</li>
        </Link>
        <Link to="/contact">
          <li className="px-3">Contact</li>
        </Link>
        <Link to="/cart">
          <li className="px-3">Cart</li>
        </Link>
      </ul>

      <h1 className="my-6">{isOnline ? "✅Online" : "❎Offline"}</h1>

      {isLoggedIn ? (
        <button
          className="bg-white mr-5 h-12 w-20 mt-4
           rounded-md hover:bg-pink-300"
          onClick={function () {
            setIsLoggedIn(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          className="bg-white mr-5 h-12 w-20 mt-4
           rounded-md hover:bg-pink-300"
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
