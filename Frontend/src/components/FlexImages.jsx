import '../styles/FlexImages.css';
import FlexImage1 from '../assets/FlexImage1.jpg'
import FlexImage2 from '../assets/FlexImage2.jpg'
import FlexImage3 from '../assets/FlexImage3.jpg'
import FlexImage4 from '../assets/FlexImage4.jpg'

// Work Needs To Be Done More.

const FlexImages = () => {
    return (
        <div className="container py-5">

            <div className="travel-header text-center mb-4">

                <span>Choose Your</span>

                <h1 className="mb-0">Perfect Holiday</h1>

            </div>

            <div className="flex-row">

                <a href="/tarragona">

                    <div className="flex-row-image image-circle">

                        <img src={FlexImage1} alt="Error 404" />

                        <div className="flex-row-image-content">

                            <span>Spain</span>

                        </div>

                    </div>

                </a>

                <a href="#">

                    <div className="flex-row-image image-square">

                        <img src={FlexImage2} alt="Error 404" />

                        <div className="overlay-content">

                            <span>Tarragona</span>

                        </div>

                        <div className="details">

                            <p> <i className="bi bi-star-half"></i> 5.0 Good </p>

                            <p>$1740</p>

                        </div>

                    </div>
                </a>

                <a href="#">

                    <div className="flex-row-image image-square">

                        <img src={FlexImage3} alt="Error 404" />

                        <div className="overlay-content">

                            <span>Madrid</span>

                        </div>

                        <div className="details">

                            <p> <i className="bi bi-star-fill"></i> 7.0 Superb </p>

                            <p>$1100</p>

                        </div>

                    </div>

                </a>

                <a href="#">

                    <div className="flex-row-image image-square">

                        <img src={FlexImage4} alt="Error 404" />

                        <div className="overlay-content">

                            <span>Madrid</span>

                        </div>

                        <div className="details">

                            <p> <i className="bi bi-star-fill"></i> 7.0 Superb </p>

                            <p>$1100</p>
                            
                        </div>

                    </div>

                </a>

            </div>

        </div>
    );
};

export default FlexImages;
