import './Results.css'
import img from '../images/results-img.png'
import icon1 from '../images/result_icon1.svg'
import icon2 from '../images/result_icon2.svg'
import icon3 from '../images/result_icon3.svg'
import icon4 from '../images/result_icon4.svg' 

function Results() {
    return(
        <div className="results">
            <div className="result__textbox">
                <p className="results__subtitle">our results</p>
                <h3 className="results__title">
                    Take a look at the big impact we have done
                </h3>
                <ul className="results__list">
                    <li className="results__item">
                        <img src={icon1} alt="heart icon" />
                        <div className="results__texts">
                            <p className="results__number">500M</p>
                            <p className="results__desc">Liters of water</p>
                        </div>
                    </li>
                    <li className="results__item">
                        <img src={icon2} alt="heart icon" />
                        <div className="results__texts">
                            <p className="results__number">7000+</p>
                            <p className="results__desc">Houses built</p>
                        </div>
                    </li>
                    <li className="results__item">
                        <img src={icon3} alt="heart icon" />
                        <div className="results__texts">
                            <p className="results__number">10,000+</p>
                            <p className="results__desc">Toys delivered</p>
                        </div>
                    </li>
                    <li className="results__item">
                        <img src={icon4} alt="heart icon" />
                        <div className="results__texts">
                            <p className="results__number">2000+</p>
                            <p className="results__desc">Schools built</p>
                        </div>
                    </li>
                </ul>
                <button className="results__button">Donate now</button>
            </div>
            <img src={img} alt="result section photo" />
        </div>
    )
}

export default Results