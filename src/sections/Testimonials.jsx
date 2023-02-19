import "./Testimonials.css";
import img from "../images/testimonials-img.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__content">
        <div className="testimonials__imageBox">
          <img
            src={img}
            alt="testimonials photo"
            className="testimonails__img"
          />
          <div className="testimonials__textbox">
            <p className="testimonials__desc">
              “Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.”
            </p>
            <h4 className="testimonials__name">Amara Onai</h4>
            <h4 className="testimonials__country">Citizen of South Africa</h4>
          </div>
        </div>
        <div className="testimonials__details">
          <h3 className="testimonials__subtitle">Testimonials</h3>
          <h2 className="testimonials__title">
            See how we are making a difference
          </h2>
          <p className="testimonials__description">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            etolme netus et malesuada fames urna nec tincidunt praesen
          </p>
          <ul className="testimonials__list">
              <li className="testimonials__item">
                <i class="fa-solid fa-circle-check testimonials__icon"></i>
                <span>Excepteur sint occaecat cupidatat non proident</span>
              </li>
              <li className="testimonials__item">
                <i class="fa-solid fa-circle-check testimonials__icon"></i>
                <span>Pellentesque elit ullamcorper dignissim</span>
              </li>
              <li className="testimonials__item">
                <i class="fa-solid fa-circle-check testimonials__icon"></i>
                <span>Nibh mauris cursus mattis molestie a iaculis</span>
              </li>
            </ul>
            <button className="testimonials__btn">Donate Now</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
