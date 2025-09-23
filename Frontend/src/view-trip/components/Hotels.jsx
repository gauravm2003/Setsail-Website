import TripImage from '../../assets/Image_1.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/ViewTrip.css'

function Hotels({ trip }) {
    const hotels = trip?.tripData?.hotelOptions;

    if (!hotels?.length) {
        return <div className="text-muted text-center mt-4">No hotels available.</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="fw-bold h5 mt-3 text-center text-primary mb-3">Hotel Recommendations</h2>
            <div className="row">
                {hotels.map((hotel, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Link
                            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.hotelName}, ${hotel.hotelAddress}`)}`}
                            target="_blank"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm border-0 transition-transform hover-scale">
                                <img
                                    src={TripImage}
                                    className="card-img-top rounded"
                                    alt={hotel.hotelName}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column gap-2">
                                    <h5 className="fw-semibold">{hotel.hotelName}</h5>
                                    <p className="text-muted small mb-1">{hotel.hotelAddress}</p>
                                    <p className="text-success small mb-1">{hotel.price}</p>
                                    <p className="text-warning small mb-0">
                                        <FontAwesomeIcon icon={faStar} /> {hotel.rating}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
