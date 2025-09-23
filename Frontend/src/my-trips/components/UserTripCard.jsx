import TripImage from '../../assets/Image_1.jpg';
import { Link } from 'react-router-dom';
import '../../styles/UserTripCard.css';

function UserTripCard({ trip }) {
    return (
        <Link to={`/view-trip/${trip?.id}`} className="text-decoration-none text-dark">
            <div className="card trip-card h-100 shadow-sm">
                <div className="image-container">
                    <img
                        src={TripImage}
                        alt="Trip"
                        className="card-img-top rounded-top trip-image"
                    />
                    <div className="image-overlay"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold trip-title">
                        {trip?.tripData?.tripPlan?.location}
                    </h5>
                    <p className="card-text text-muted">
                        {trip?.userSelection?.noOfDays} Days Trip of {trip?.userSelection?.budget} Budget
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default UserTripCard;

