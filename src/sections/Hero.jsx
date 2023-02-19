import "./Hero.css";
import heroImage from "../images/hero-img.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Giving help to those who need it</h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

          <div className="hero__buttons">
            <button className="hero__donateBtn">Donate Now</button>
            <button className="hero__aboutBtn">About our charity</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
