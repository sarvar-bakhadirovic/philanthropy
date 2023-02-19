import "./Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__about">
          <img src={logo} alt="footer logo" className="footer__logo" />
          <p className="footer__aboutText">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris.
          </p>
        </div>
        <ul className="footer__menu">
          <li className="footer__menu-item">Menu</li>
          <li className="footer__menu-item">
            <a href="#">Home</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">About</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Blog</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Blog post</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Donate</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Donate Single</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="footer__menu footer__pages">
          <li className="footer__menu-item">Utility Pages</li>
          <li className="footer__menu-item">
            <a href="#">Start here</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Styleguide</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Password Protected</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">404 Not found</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Licenses</a>
          </li>
          <li className="footer__menu-item">
            <a href="#">Changelog</a>
          </li>
        </ul>
        <div className="footer__join">
          <h2 className="footer__title">
            Join us and let’s make a better world, today
          </h2>

          <button className="footer__btn1">Donate Now</button>
          <button className="footer__btn2">More ways to help</button>
        </div>
      </div>
      <div className="footer__copyrighter">
        <p className="footer__p1">Copyright © Philanthropy X | Designed by</p>
        <p className="footer__p2">BRIX Templates</p>
        <p className="footer__p3">- Powered by</p>
        <p className="footer__p4">Webflow</p>
      </div>
    </div>
  );
}

export default Footer;
