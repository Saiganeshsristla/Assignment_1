import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p id="copyright">@Saiganesh made with ❤️</p>
      <ul>
        <Link
          to="https://instagram.com/saiganesh31_?igshid=MTIzZWQxMDU="
          target="_blank"
          rel="nooperner"
        >
          {" "}
          <li className="socials">Instagarm</li>{" "}
        </Link>
        <Link
          to="https://twitter.com/SSristla?t=-C92-X2zurTTjI7Im7lm1Q&s=09"
          target="_blank"
          rel="nooperner"
        >
          {" "}
          <li className="socials">Twitter</li>{" "}
        </Link>
        <Link
          to="mailto:saiganesh3108@gmail.com"
          target="_blank"
          rel="nooperner"
        >
          <li className="socials">Gmail</li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
