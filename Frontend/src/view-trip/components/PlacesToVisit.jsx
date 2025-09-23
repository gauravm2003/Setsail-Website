import PlaceCardItem from './PlaceCardItem';
import '../../styles/ViewTrip.css'

function PlacesToVisit({ trip }) {
    const itineraryArray = Object.entries(trip?.tripData?.itinerary || {});

    return (
        <div className="container mt-4">
            <h2 className="fw-bold h5 mb-4 text-center text-primary">Places To Visit</h2>
            <div>
                {itineraryArray.map(([dayKey, item], index) => (
                    <div className="mt-4" key={dayKey}>
                        <h2 className="fw-bold h6 mb-3 text-secondary">
                            {`Day ${index + 1}: ${item?.theme}`}
                        </h2>
                        <div className="row">
                            {item?.plan?.map((place, placeIndex) => (
                                <div className="col-md-6 mb-4" key={placeIndex}>
                                    <PlaceCardItem place={place} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlacesToVisit;
