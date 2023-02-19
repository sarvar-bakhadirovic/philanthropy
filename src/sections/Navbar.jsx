import './Navbar.css'
import logo from '../images/logo.svg'

function Navbar () {
    return(
        <div className='navbar'>
            <div className="navbar__content">
                <a href="/" className='navbar__logo'>
                    <img src={logo} alt="logo" />
                </a>

                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a href="/">Home</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/">About</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/">Pages</a>
                    </li>
                </ul>

                <div className="navbar__buttons">
                    <i class="fa-solid fa-cart-shopping navbar__icon"></i>
                    <button className="navbar__button">Donate now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar