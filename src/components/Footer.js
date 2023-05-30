const Footer = () => {
  return (
    <div className="footer">
      <p id="copyright">@Saiganesh made with ❤️</p>
      <ul>
        <a
          href="https://instagram.com/saiganesh31_?igshid=MTIzZWQxMDU="
          target="_blank"
        >
          {" "}
          <li className="socials">Instagarm</li>{" "}
        </a>
        <a
          href="https://twitter.com/SSristla?t=-C92-X2zurTTjI7Im7lm1Q&s=09"
          target="_blank"
        >
          {" "}
          <li className="socials">Twitter</li>{" "}
        </a>
        <a href="mailto:saiganesh3108@gmail.com" target="_blank">
          {" "}
          <li className="socials">Gmail</li>{" "}
        </a>
      </ul>
    </div>
  );
};

export default Footer;
