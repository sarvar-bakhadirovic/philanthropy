import "./News.css";
import img1 from "../images/news-img1.png";
import img2 from "../images/news-img2.png";

function News() {
  return (
    <div className="news">
      <h4 className="news__subtitle">News & Resources</h4>
      <h2 className="news__title">Read our latest news</h2>

      <ul className="news__list">
        <li className="news__item">
          <img src={img1} alt="news image" />
          <div className="news__content">
            <div className="news__dataBox">
              <span className="news__text">Articles</span>
              <span className="news__data">Feb 11, 2022</span>
            </div>

            <h2 className="news__desc">
              What to donate to a food bank and what to avoid ?
            </h2>

            <a href="#" className="news__more">
              Read <br />
              More
            </a>
          </div>
        </li>
        <li className="news__item">
          <img src={img2} alt="news image" />
          <div className="news__content">
            <div className="news__dataBox">
              <span className="news__text">Resources</span>
              <span className="news__data">Feb 11, 2022</span>
            </div>

            <h2 className="news__desc">
              13 ways to give to charity without breaking your budget
            </h2>

            <a href="#" className="news__more">
              Read <br />
              More
            </a>
          </div>
        </li>
      </ul>

      <div className="news__btnBox">
        <button className="news__donateBtn">Donate now</button>
        <button className="news__btn">Read more news</button>
      </div>
    </div>
  );
}

export default News;
