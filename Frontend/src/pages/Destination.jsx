import React, { useState, useEffect } from 'react'
import Default from '../assets/Image_1.jpg'
import { ClipLoader } from 'react-spinners';
import '../styles/Destination.css'

function Destination() {

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch trips when the component mounts
    useEffect(() => {
        const fetchTrips = async () => {
            try {
                // const res = await fetch("http://localhost:5000/api/trips");
                const res = await fetch("https://setsail-backend.onrender.com/api/trips");
                const data = await res.json();
                setTrips(data);
            } catch (err) {
                console.error("Error fetching trips:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <ClipLoader color="#36d7b7" size={70} />
            </div>
        );
    }

    return (
        <>
            <div className="container p-4">
                <div className="row">
                    {trips.length > 0 ? (
                        trips.map((trip) => (
                            <div key={trip._id} className="col-md-4 mb-4">
                                <a href={`/trip/${trip._id}`} className="trip-card-link">
                                    <div className="card trip-card">
                                        <div className="card-img-wrapper">
                                            <img
                                                src={trip.gallery[0] || Default}
                                                className="card-img-top"
                                                alt={trip.name}
                                            />
                                            <div className="img-overlay">
                                                <h5 className="overlay-title">{trip.name}</h5>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{trip.name}</h5>
                                            <p className="card-text">{trip.description}</p>
                                            <p className="card-text price"><strong>Price:</strong> ${trip.price}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No trips available yet.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Destination
