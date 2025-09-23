import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../service/firebaseConfig';
import '../../styles/ViewTrip.css'

// Importing Pages
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';

function ViewTrip() {
    const { tripID } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripID && getTripData();
    }, [tripID]);

    const getTripData = async () => {
        const docRef = doc(db, "AITrips", tripID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No Such Document.");
            toast('No Trip Found!');
        }
    };

    return (
        <div className="view-trip-container">

            <InfoSection trip={trip} />

            <Hotels trip={trip} />

            <PlacesToVisit trip={trip} />

        </div>
    );
}

export default ViewTrip;