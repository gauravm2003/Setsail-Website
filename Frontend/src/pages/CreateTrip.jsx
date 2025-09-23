import { useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import '../styles/CreateTrip.css'
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '../constants/Options';
import { toast } from 'react-toastify';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { chatSession } from '../service/AIModal';
import { useGoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {
    const [openDialog, SetOpenDialog] = useState(false);

    const [isClosing, setIsClosing] = useState(false);

    const [formData, setFormData] = useState({});

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            SetOpenDialog(false);
        });
    };

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const login = useGoogleLogin({
        onSuccess: (codeResp) => {
            GetUserProfile(codeResp);
        },
        onError: (error) => console.log(error)
    })

    const onGenerateTrip = async () => {

        const user = localStorage.getItem('user');

        if (!user) {
            SetOpenDialog(true)
            return;
        }

        if (!formData.location || !formData.noOfDays || !formData?.budget || !formData?.traveler) {
            toast.error("Please! Fill all the details.");
            return;
        }

        if (formData.noOfDays > 5) {
            toast.error("Trip can't be longer than 5 days.");
            return;
        }

        toast.success("Your Trip Is Generating...");
        // console.log(formData);

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{budget}', formData?.budget)
            .replace('{traveler}', formData?.traveler)
            .replace('{totalDays}', formData?.noOfDays)

        // console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        // console.log(result.response.text());
        setLoading(false);
        SaveAiTrip(result.response.text())
    }

    const SaveAiTrip = async (TripData) => {

        setLoading(true);

        const user = JSON.parse(localStorage.getItem('user'))
        const docID = Date.now().toString()

        await setDoc(doc(db, "AITrips", docID), {
            userSelection: formData,
            tripData: JSON.parse(TripData),
            userEmail: user?.email,
            id: docID
        })

        setLoading(false);
        navigate('/view-trip/'+docID);
    }

    const GetUserProfile = (tokenInfo) => {
        // console.log("Access Token:", tokenInfo?.access_token);

        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenInfo?.access_token}`,
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(resp => {
                // console.log('User  Profile:', resp);
                localStorage.setItem('user', JSON.stringify(resp))
                SetOpenDialog(false);
                onGenerateTrip();
            });
    };

    return (

        <div className="py-5">

            <div className="container travel-container bg-white py-5">

                {/* Header */}
                <div className="travel-header text-center mb-4">
                    <span>Plan Your</span>
                    <h1 className="mb-0">Perfect Trip</h1>
                </div>

                {/* Form Sections */}
                <div className="p-4 p-md-5">

                    {/* Destination */}
                    <div className="form-section">
                        <h2 className="section-title">What Is Your Destination?</h2>
                        {/* Replace below with GooglePlacesAutocomplete when fixed */}
                        <input
                            type="text"
                            className="form-control form-control-lg py-3"
                            placeholder="Ex. London, New York"
                            onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                    </div>

                    {/* Duration */}
                    <div className="form-section">
                        <h2 className="section-title">How Many Days Are You Planning For?</h2>
                        <input
                            type="number"
                            className="form-control form-control-lg py-3"
                            placeholder="Ex. 5"
                            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                        />
                    </div>

                    {/* Budget Options */}
                    <div className="form-section">
                        <h2 className="section-title">What's Your Budget?</h2>
                        <div className="row g-4">
                            {SelectBudgetOptions.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div
                                        className={`travel-option text-center ${formData?.budget === item.title ? 'active' : ''
                                            }`}
                                        onClick={() => handleInputChange('budget', item.title)}
                                    >
                                        <div className="option-icon">{item.icon}</div>
                                        <h3 className="h5">{item.title}</h3>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Travel Options */}
                    <div className="form-section">
                        <h2 className="section-title">Who Are You Traveling With?</h2>
                        <div className="row g-4">
                            {SelectTravelesList.map((item, index) => (
                                <div className="col-md-3 col-6" key={index}>
                                    <div
                                        className={`travel-option text-center ${formData?.traveler === item.people ? 'active' : ''
                                            }`}
                                        onClick={() => handleInputChange('traveler', item.people)}
                                    >
                                        <div className="option-icon">{item.icon}</div>
                                        <h3 className="h6">{item.title}</h3>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-end mt-5">
                        <button
                            className="btn btn-travel btn-lg"
                            onClick={onGenerateTrip}
                            disabled={loading}
                        >
                            {loading ? (
                                <FontAwesomeIcon icon={faSpinner} spin />
                            ) : (
                                <>
                                    <i className="bi bi-magic pe-1"></i> Generate Trip
                                </>
                            )}
                        </button>

                    </div>

                    {/* Dialog Box */}
                    <Dialog.Root open={openDialog} onOpenChange={SetOpenDialog}>

                        <Dialog.Portal>

                            <Dialog.Overlay className={`dialog-overlay ${isClosing ? 'closing' : ''}`} />

                            <Dialog.Content className={`dialog-content ${isClosing ? 'closing' : ''}`}>

                                <div className="travel-dialog">
                                    <div className="dialog-header">

                                        <Dialog.Title asChild>
                                            <h2>Sign-In</h2>
                                        </Dialog.Title>

                                    </div>
                                    <div className="dialog-body">

                                        <div className="text-center">

                                            <i className="fas fa-plane travel-icon"></i>

                                            <Dialog.Description asChild>
                                                <p className="dialog-description">
                                                    Continue with your Google account
                                                </p>
                                            </Dialog.Description>

                                        </div>

                                        <button className="btn-google mb-3" onClick={login}>
                                            <i className="fab fa-google"></i> Sign In to Google Account
                                        </button>

                                        <div className="footer-links">
                                            <a href="#">Privacy Policy</a>
                                            <a href="#">Terms of Service</a>
                                        </div>
                                    </div>

                                    <Dialog.Close asChild>

                                        <button
                                            className="dialog-close-button"
                                            aria-label="Close"
                                            onClick={handleClose}
                                        >
                                            <Cross2Icon />
                                        </button>

                                    </Dialog.Close>

                                </div>

                            </Dialog.Content>

                        </Dialog.Portal>

                    </Dialog.Root>

                </div>
            </div>
        </div>
    )
}

export default CreateTrip;