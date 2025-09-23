import React from 'react'
import Image from '../../assets/GreetingsFromParis.png'

function ThirdComponent() {
    return (
        <div>

            {/* <img className="greetings-from-paris" src="/images/greetings-from-paris.png" alt="Error 404"></img> */}

            <section className="third-content">

                <div className="container text-center">

                    <img className="greetings-from-paris" src={Image} alt="Error 404" />

                    <div className="row text-center">

                        <div className="col-md-3 col-sm-6 third-section-icons">

                            <i className="bi bi-camera2"></i>
                            <h2>Restaurents</h2>
                            <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>

                        </div>

                        <div className="col-md-3 col-sm-6 third-section-icons">

                            <i className="bi bi-geo-alt-fill"></i>
                            <h2>Sightseeing</h2>
                            <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>

                        </div>

                        <div className="col-md-3 col-sm-6 third-section-icons">

                            <i className="bi bi-shop"></i>
                            <h2>Shops & Boutiques</h2>
                            <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>

                        </div>

                        <div className="col-md-3 col-sm-6 third-section-icons">

                            <i className="bi bi-compass"></i>
                            <h2>Where to Stay</h2>
                            <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default ThirdComponent
