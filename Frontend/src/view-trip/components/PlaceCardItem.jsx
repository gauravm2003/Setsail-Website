import TripImage from '../../assets/Image_1.jpg';
import { Link } from 'react-router-dom';
import '../../styles/ViewTrip.css'

function PlaceCardItem({ place }) {
    return (
        <Link
            to={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place?.placeName)}
            target="_blank"
            className="text-decoration-none text-dark"
        >
            <div className="border rounded p-3 mt-2 d-flex gap-3 align-items-start shadow-sm transition-transform hover-scale">
                <img
                    src={TripImage}
                    alt={place?.placeName}
                    className="rounded"
                    style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                />
                <div>
                    <h2 className="fw-bold h5 text-primary">{place?.placeName}</h2>
                    <p className="text-muted small mb-2">{place?.placeDetail}</p>
                    <p className="text-secondary small fst-italic">{place?.timeToTravel}</p>
                </div>
            </div>
        </Link>
    );
}

export default PlaceCardItem;
