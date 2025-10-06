import React, { useState } from "react";
import "./styles/AddNewTrip.css";

function AddNewTrip() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        quickInfo: "",
        destination: "",
        departure: "",
        departureTime: "",
        returnTime: "",
        dressCode: "",
        included: "",
        notIncluded: "",
        gallery: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // const res = await fetch("http://localhost:5000/api/trips", {
            const res = await fetch("https://setsail-backend.onrender.com/api/trips", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    price: Number(formData.price),
                    included: formData.included.split(",").map((i) => i.trim()),
                    notIncluded: formData.notIncluded.split(",").map((i) => i.trim()),
                    gallery: formData.gallery.split(",").map((g) => g.trim()),
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Trip created successfully!");
                setFormData({
                    name: "",
                    price: "",
                    description: "",
                    quickInfo: "",
                    destination: "",
                    departure: "",
                    departureTime: "",
                    returnTime: "",
                    dressCode: "",
                    included: "",
                    notIncluded: "",
                    gallery: "",
                });
            } else {
                setMessage(`❌ Error: ${data.message}`);
            }
        } catch (err) {
            setMessage("❌ Server error. Check console.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container addtrip-container">
            {/* Header */}
            <div className="addtrip-header text-center mb-4">
                <span>Create a New</span>
                <h1 className="mb-0">Trip Package</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                {/* Basic Info */}
                <div className="section-card">
                    {/* <h5 className="section-title">Basic Information</h5> */}

                    <label className="section-title" htmlFor="name">Trip Name *</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter trip name"
                        className="form-control form-control-lg py-3"
                        required
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="price">
                        Price (USD) *
                    </label>
                    <input
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        type="number"
                        min="0"
                        className="form-control"
                        required
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="description">
                        Description *
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the trip"
                        className="form-control"
                        required
                    />
                </div>

                {/* Trip Details */}
                <div className="section-card">
                    <h5 className="section-title">Trip Details</h5>

                    <label className="form-control-lg py-3 mt-3" htmlFor="quickInfo">Quick Info</label>
                    <input
                        id="quickInfo"
                        name="quickInfo"
                        value={formData.quickInfo}
                        onChange={handleChange}
                        placeholder="Short summary"
                        className="form-control"
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="destination">
                        Destination
                    </label>
                    <input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Where to?"
                        className="form-control"
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="departure">
                        Departure Place
                    </label>
                    <input
                        id="departure"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        placeholder="Starting point"
                        className="form-control"
                    />

                    <div className="d-flex gap-3 mt-3 flex-wrap">
                        <div style={{ flex: "1 1 45%" }}>
                            <label className="form-control-lg py-3 mt-3" htmlFor="departureTime">Departure Time</label>
                            <input
                                id="departureTime"
                                name="departureTime"
                                value={formData.departureTime}
                                onChange={handleChange}
                                placeholder="e.g. 08:00 AM"
                                className="form-control"
                            />
                        </div>
                        <div style={{ flex: "1 1 45%" }}>
                            <label className="form-control-lg py-3 mt-3" htmlFor="returnTime">Return Time</label>
                            <input
                                id="returnTime"
                                name="returnTime"
                                value={formData.returnTime}
                                onChange={handleChange}
                                placeholder="e.g. 06:00 PM"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <label className="form-control-lg py-3 mt-3" htmlFor="dressCode">
                        Dress Code
                    </label>
                    <input
                        id="dressCode"
                        name="dressCode"
                        value={formData.dressCode}
                        onChange={handleChange}
                        placeholder="Recommended attire"
                        className="form-control"
                    />
                </div>

                {/* Inclusions & Gallery */}
                <div className="section-card">
                    <h5 className="section-title">Inclusions & Gallery</h5>

                    <label className="form-control-lg py-3 mt-3" htmlFor="included">Included (comma-separated)</label>
                    <input
                        id="included"
                        name="included"
                        value={formData.included}
                        onChange={handleChange}
                        placeholder="e.g. Meals, Transport"
                        className="form-control"
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="notIncluded">
                        Not Included (comma-separated)
                    </label>
                    <input
                        id="notIncluded"
                        name="notIncluded"
                        value={formData.notIncluded}
                        onChange={handleChange}
                        placeholder="e.g. Tips, Personal expenses"
                        className="form-control"
                    />

                    <label className="form-control-lg py-3 mt-3" htmlFor="gallery">
                        Gallery URLs (comma-separated)
                    </label>
                    <input
                        id="gallery"
                        name="gallery"
                        value={formData.gallery}
                        onChange={handleChange}
                        placeholder="Image URLs separated by commas"
                        className="form-control"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-travel btn-lg" disabled={loading}>
                    {loading ? "Saving..." : "Save Trip"}
                </button>
            </form>

            {message && (
                <p className={`message ${message.startsWith("✅") ? "success" : "error"}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default AddNewTrip;
