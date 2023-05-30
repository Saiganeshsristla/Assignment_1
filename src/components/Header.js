const Header = () => {
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
          <li>Service</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
        <a href="/">
          <li>Cart</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
