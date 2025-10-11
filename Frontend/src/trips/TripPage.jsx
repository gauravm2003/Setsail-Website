import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // dynamic route
import Tarragona from "./Tarragona"; // your reusable component
import { ClipLoader } from 'react-spinners';

function TripPage() {
    const { idOrSlug } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                // const res = await fetch(`http://localhost:5000/api/trips/${idOrSlug}`);
                const res = await fetch(`https://setsail-backend.onrender.com/api/trips/${idOrSlug}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || "Failed to load trip");
                setTrip(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrip();
    }, [idOrSlug]);

    if (loading) return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <ClipLoader color="#36d7b7" size={70} />
        </div>
    );
    if (error) return <p>❌ {error}</p>;
    if (!trip) return <p>Trip not found</p>;

    return (
        <Tarragona
            title={trip.name}
            price={trip.price}
            reviewCount={trip.reviewsCount || 0}
            rating={trip.rating || 0}
            description={trip.description}
            quickInfo={trip.quickInfo.map(item => ({ label: item }))}

            details={{
                Destination: trip.destination,
                Departure: trip.departure,
                "Departure Time": trip.departureTime,
                "Dress Code": trip.dressCode,
                "Return Time": trip.returnTime,
                Included: trip.included.map(item => ({ label: item })),
                "Not Included": trip.notIncluded.map(item => ({ label: item })),
            }}
            gallery={trip.gallery}
        />

    );
}

export default TripPage;
