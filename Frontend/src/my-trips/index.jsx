import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../service/firebaseConfig';
import UserTripCard from './components/UserTripCard';

function MyTrips() {
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            // Optional: Redirect logic
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        setUserTrips([]);

        querySnapshot.forEach((doc) => {
            setUserTrips(prevVal => [...prevVal, { ...doc.data(), id: doc.id }]);
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="fw-bold fs-3 mb-4 text-center text-primary">My Trips</h2>

            <div className="row g-4">
                {userTrips.length > 0 ? (
                    userTrips.map((trip, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <UserTripCard trip={trip} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">No trips found. Start planning your next adventure!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyTrips;

