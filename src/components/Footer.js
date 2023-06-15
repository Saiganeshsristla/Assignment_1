import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center h-16">
      <p className="self-center mx-5 text-pink-300">@Saiganesh made with ❤️</p>
      <ul className="flex self-center">
        <Link
          to="https://instagram.com/saiganesh31_?igshid=MTIzZWQxMDU="
          target="_blank"
          rel="nooperner"
        >
          {" "}
          <li className="m-2 text-pink-300">Instagarm</li>{" "}
        </Link>
        <Link
          to="https://twitter.com/SSristla?t=-C92-X2zurTTjI7Im7lm1Q&s=09"
          target="_blank"
          rel="nooperner"
        >
          {" "}
          <li className="m-2 text-pink-300">Twitter</li>{" "}
        </Link>
        <Link
          to="mailto:saiganesh3108@gmail.com"
          target="_blank"
          rel="nooperner"
        >
          <li className="m-2 text-pink-300">Gmail</li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
