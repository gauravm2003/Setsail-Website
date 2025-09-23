import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function Confirm() {

    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    if (!data) {
        return (
            <div className="p-4">
                <h2>No booking details found</h2>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome To The Confirmation Page</h1>

            <div className="p-4">
                <h2 className="fw-bold">Confirm Your Booking</h2>
                <ul className="list-group mb-3">
                    <li className="list-group-item">Name: {data.name}</li>
                    <li className="list-group-item">Email: {data.email}</li>
                    {/* <li className="list-group-item">Confirm Email: {data.confirmEmail}</li> */}
                    <li className="list-group-item">Phone: {data.phone}</li>
                    <li className="list-group-item">Date: {data.date}</li>
                    <li className="list-group-item">Tickets: {data.tickets}</li>
                    <li className="list-group-item">Message: {data.message}</li>
                </ul>
                <button className="btn btn-success me-2">Confirm</button>
                <button className="btn btn-secondary" onClick={() => navigate("/tarragona")}>
                    Edit Details
                </button>
            </div>
        </div>

    )
}

export default Confirm
