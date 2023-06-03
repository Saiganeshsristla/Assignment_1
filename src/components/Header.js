import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <h1 id="logo">Food Villa</h1>
      </a>
      <ul id="nav-list">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
        <a href="/">
          <li>Cart</li>
        </a>
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
