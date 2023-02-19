import React from "react";
import "./About.css";
import image_1 from "../images/about-img1.png";
import image_2 from "../images/about-img2.png";
import image_3 from "../images/about-img3.png";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__first">
          <span className="about__subtitle">about us</span>
          <h2 className="about__title">
            We are here to support vulnerable communities
          </h2>
          <p className="about__desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua molestie
            a iaculis at erat pellentesque adipiscing commodo elit at.
          </p>

          <img src={image_1} alt="about photo" className="about__img" />
          <img src={image_2} alt="about photo" />
        </div>
        <div className="about__second">
          <div className="about__btnWrapper">
            <button className="about__donate">Donate Now</button>
            <button className="about__btn">About Us</button>
          </div>
          <img src={image_3} alt="about photo" className="about__image"/>

          <div className="about__textbox">
            <p className="about__text">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et
              netus et malesuada fames urna nec tincidunt praesent semper
              feugiat metus aliquam eleifend mi in nulla posuere sollicitudin
              pretium aenean pharetra magna ac placerat.
            </p>
            <ul className="about__list">
              <li className="about__item">
                <i class="fa-solid fa-circle-check about__icon"></i>
                <span>Excepteur sint occaecat cupidatat non proident</span>
              </li>
              <li className="about__item">
                <i class="fa-solid fa-circle-check about__icon"></i>
                <span>Pellentesque elit ullamcorper dignissim</span>
              </li>
              <li className="about__item">
                <i class="fa-solid fa-circle-check about__icon"></i>
                <span>Nibh mauris cursus mattis molestie a iaculis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
