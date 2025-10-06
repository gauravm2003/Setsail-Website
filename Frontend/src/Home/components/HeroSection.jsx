import '../../styles/HeroSection.css'

function HeroSection() {
    return (
        <div>
            <section id="home" className="hero-gradient py-5">

                <div className="container py-5 d-flex flex-column flex-md-row align-items-center">

                    <div className="mb-4 mb-md-0">

                        <h1 className="display-4 font-weight-bold text-dark mb-4" style={{
                            'fontSize': '50px',
                            'fontWeight': '500',

                        }}>
                            Discoverd Your Next <span style={{ 'color': '#3fd0d4' }}>Adventure</span> With AI
                        </h1>

                        <p className="text-dark mb-4 me-4">
                            VoyageAI combines AI-powered travel planning with curated experiences to help you discover, plan, and book your perfect trip.
                        </p>

                        <a href="/ai-trip-planner">
                            <button type="submit" className='Hero-Button'>
                                Plan Your Trip
                            </button>
                        </a>

                    </div>

                    <div className="d-flex justify-content-center">

                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48ae5ca1-318d-442e-9870-a98c84912d57.png"
                            alt="Travelers exploring a beautiful city"
                            className="rounded shadow-lg img-fluid"
                        />

                    </div>

                </div>

            </section>

        </div>
    )
}

export default HeroSection