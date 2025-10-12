import HeroSection from './components/HeroSection'
import FlexImages from './components/FlexImages'
import ThirdComponent from './components/ThirdComponent'
import '../styles/Home.css'

function Home() {
    return (
        <>

            <HeroSection />

            <FlexImages />

            <ThirdComponent />

            <section>

                <div className="fourth-section container-fluid">

                    <h4>Subscribe Now and Quench Your Wanderlust!</h4>

                    <a href="#">

                        <input className="footer-subscribe" type="submit" value="Join Now" />

                    </a>

                </div>

            </section>

        </>
    )
}

export default Home