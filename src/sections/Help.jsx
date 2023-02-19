import "./Help.css";
import img from "../images/help-img.png";

function Help() {
  return (
    <div className="help">
      <div className="help__content">
        <h4 className="help__subtitle">Take a look at our video</h4>
        <h2 className="help__title">
          We have helped over 200 vulnerable communities worldwide
        </h2>
        <div className="help__buttonBox">
          <button className="help__donateBtn">Donate now</button>
          <button className="help__aboutBtn">About our charity</button>
        </div>
        <img src={img} alt="help section image" className="help__img" />

        <ul className="help__list">
          <li className="help__item">
            <h4 className="help__text">The goal and mission behind</h4>
            <p className="help__desc">
              Cursus metus aliquam eleifend mi in nulla posuere faucibus
              interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna
              eget est lorem. Auctor urna nunc id cursus metus aliquam eleifend.
              Dictumst quisque sagittis purus sit amet volutpat consequa.
            </p>
          </li>
          <li className="help__item">
            <h4 className="help__text">How our charity got started</h4>
            <p className="help__desc">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et
              netus et malesuada fames urna nec tincidunt praesent semper
              feugiat metus aliquam eleifend mi in nulla posuere sollicitudin
              pretium aenean pharetra magna ac placerat.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
