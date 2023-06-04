import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="#">
        <h1 id="logo">Food Villa</h1>
      </Link>
      <ul id="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
      {isLoggedIn ? (
        <button
          className="login-btn"
          onClick={function () {
            setIsLoggedIn(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          className="logout-btn"
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
