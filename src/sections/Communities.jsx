import "./Communities.css";
import icon1 from "../images/communities-icon1.svg";
import icon2 from "../images/communities-icon2.svg";
import icon3 from "../images/communities-icon3.svg";
import icon4 from "../images/communities-icon4.svg";
import icon5 from "../images/communities-icon5.svg";
import icon6 from "../images/communities-icon6.svg";

function Communities() {
  return (
    <div className="communities">
      <div className="communities__header">
        <div className="communities__textbox">
          <h3 className="communities__subtitle">How we help?</h3>
          <h2 className="communities__title">
            What are we doing to assist these communities?
          </h2>
        </div>
        <button className="communities__btn">Donate now</button>
      </div>
      <ul className="communities__list">
        <li className="communities__item">
          <img src={icon1} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">House & shelter</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
        <li className="communities__item">
          <img src={icon2} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">Love & support</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
        <li className="communities__item">
          <img src={icon3} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">Food & groceries</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
        <li className="communities__item">
          <img src={icon4} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">Environmental help</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
        <li className="communities__item">
          <img src={icon5} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">Education</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
        <li className="communities__item">
          <img src={icon6} alt="communities icon" className="communities__img"/>
          <h3 className="communities__text">Health & insurance</h3>
          <p className="communities__desc">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Communities;
