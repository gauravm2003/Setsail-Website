import TripImage from '../../assets/Image_1.jpg';
import '../../styles/ViewTrip.css'

function InfoSection({ trip }) {
    return (
        <div className="container mt-4">
            <img
                src={TripImage}
                className="img-fluid w-100 rounded"
                style={{ height: '340px', objectFit: 'cover' }}
                alt="Trip Destination"
            />
            <div className="mt-4 bg-white p-4 rounded shadow-sm">
                <div className="d-flex flex-column gap-3 mb-4">
                    <h2 className="fw-bold h4 text-start text-primary">{trip?.tripData?.tripPlan?.location}</h2>
                    <div className="d-flex justify-content-start gap-2">
                        <span className="px-3 py-2 bg-light rounded-pill text-secondary">
                            {trip?.userSelection?.noOfDays} {trip?.userSelection?.noOfDays > 1 ? 'Days' : 'Day'}
                        </span>
                        <span className="px-3 py-2 bg-light rounded-pill text-secondary">
                            {trip?.userSelection?.budget} Trip
                        </span>
                        <span className="px-3 py-2 bg-light rounded-pill text-secondary">
                            {trip?.userSelection?.traveler} {trip?.userSelection?.traveler > 1 ? 'Travelers' : 'Traveler'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
