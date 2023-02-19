import About from "../sections/About"
import Hero from "../sections/Hero"
import Navbar from "../sections/Navbar"
import Statistics from "../sections/Statistics"
import Results from "../sections/Results"
import Help from "../sections/Help"
import Communities from "../sections/Communities"
import Join from "../sections/Join"
import Testimonials from "../sections/Testimonials"
import News from "../sections/News"
import Footer from "../sections/Footer"
import './Home.css'


function Home () {
    return(
        <div className="home">
            <Navbar />
            <Hero />
            <Statistics />
            <About />
            <Results />
            <Help />
            <Communities />
            <Join />
            <Testimonials />
            <News />
            <Footer />
        </div>
    )
}

export default Home