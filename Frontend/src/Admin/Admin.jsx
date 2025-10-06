import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AdminLogin from "./AdminLogin";
import TripImage from '../assets/Image_1.jpg'

// const API_URL = "http://localhost:5000/api/trips";
const API_URL = "https://setsail-backend.onrender.com/api/trips";

const AdminPanel = () => {
    const [trips, setTrips] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [editingTrip, setEditingTrip] = useState(null); // either null or the trip object
    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        description: "",
        price: "",
        image: "",
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true); // ✅ new state
    const [loading, setLoading] = useState(false);

    // Helper to safely get id from trip or id string
    const getId = (tripOrId) => {
        if (!tripOrId) return null;
        if (typeof tripOrId === "string") return tripOrId;
        return tripOrId._id ?? tripOrId.id ?? null;
    };

    const fetchTrips = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(API_URL);
            if (!res.ok)
                throw new Error(`Failed to fetch trips (${res.status})`);
            const data = await res.json();
            setTrips(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("❌ Error fetching trips:", err);
            setError("Failed to load trips. Check console/network.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    const openModal = () => {
        const el = document.getElementById("tripModal");
        if (!el) return;
        const modal = new window.bootstrap.Modal(el);
        modal.show();
    };

    const closeModal = () => {
        const el = document.getElementById("tripModal");
        if (!el) return;
        const instance = window.bootstrap.Modal.getInstance(el);
        if (instance) instance.hide();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((p) => ({ ...p, [id]: value }));
    };

    // Open modal for new trip
    const handleAddNew = () => {
        setEditingTrip(null);
        setFormData({
            name: "",
            destination: "",
            description: "",
            price: "",
            image: "",
        });
        setMessage(null);
        setError(null);
        openModal();
    };

    // Open modal for edit and prefill form
    const handleEdit = (trip) => {
        setEditingTrip(trip);
        setFormData({
            name: trip.name ?? "",
            destination: trip.destination ?? "",
            description: trip.description ?? "",
            price: trip.price ?? "",
            image: trip.image ?? "",
        });
        setMessage(null);
        setError(null);
        openModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        // minimal validation
        if (!formData.name || !formData.destination) {
            setError("Name and destination are required.");
            return;
        }

        const payload = {
            ...formData,
            price: formData.price === "" ? 0 : Number(formData.price),
            image:
                formData.image ||
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/942dd797-ee67-4dae-a6d9-c7d6708cccc7.png",
        };

        try {
            setLoading(true);

            if (editingTrip) {
                const id = getId(editingTrip);
                if (!id) throw new Error("Trip id not found for update.");
                const res = await fetch(`${API_URL}/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) {
                    // try to read server message
                    let serverMsg = "";
                    try {
                        const json = await res.json();
                        serverMsg = json?.message ? `: ${json.message}` : "";
                    } catch {}
                    throw new Error(
                        `Failed to update trip (${res.status})${serverMsg}`
                    );
                }
                setMessage("✏️ Trip updated successfully.");
            } else {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) {
                    let serverMsg = "";
                    try {
                        const json = await res.json();
                        serverMsg = json?.message ? `: ${json.message}` : "";
                    } catch {}
                    throw new Error(
                        `Failed to create trip (${res.status})${serverMsg}`
                    );
                }
                setMessage("✅ Trip created successfully.");
            }

            // refresh trips from backend (safer)
            await fetchTrips();
            setFormData({
                name: "",
                destination: "",
                description: "",
                price: "",
                image: "",
            });
            setEditingTrip(null);
            closeModal();
        } catch (err) {
            console.error("❌ Error saving trip:", err);
            setError(err.message || "Error saving trip.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (tripOrId) => {
        const id = getId(tripOrId);
        if (!id) {
            setError("Cannot delete: trip id missing.");
            return;
        }

        if (!window.confirm("Are you sure you want to delete this trip?"))
            return;

        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (!res.ok) {
                let serverMsg = "";
                try {
                    const json = await res.json();
                    serverMsg = json?.message ? `: ${json.message}` : "";
                } catch {}
                throw new Error(
                    `Failed to delete trip (${res.status})${serverMsg}`
                );
            }
            setMessage("🗑️ Trip deleted successfully.");
            // optimistically update UI (or re-fetch)
            setTrips((prev) => prev.filter((t) => getId(t) !== id));
        } catch (err) {
            console.error("❌ Error deleting trip:", err);
            setError(err.message || "Failed to delete trip.");
        } finally {
            setLoading(false);
        }
    };

    const filteredTrips = trips.filter(
        (trip) =>
            (trip.name ?? "")
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            (trip.destination ?? "")
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            (trip.description ?? "")
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {!isAuthenticated && (
                <AdminLogin onLogin={() => setIsAuthenticated(true)} />
            )}

            {isAuthenticated && (
                <div>
                    <Navbar />

                    <div className="container my-5">

                        {message && (
                            <div className="alert alert-success">{message}</div>
                        )}
                        {error && (
                            <div className="alert alert-danger">{error}</div>
                        )}
                        {loading && <div className="mb-3">Loading...</div>}

                        <div className="row g-4">
                            {filteredTrips.length === 0 && !loading && (
                                <p>No trips found.</p>
                            )}

                            {filteredTrips.map((trip, index) => {
                                const id = getId(trip) || index;
                                return (
                                    <div className="col-md-6 col-lg-4" key={id}>
                                        <div className="card h-100 shadow-sm">
                                            <img
                                                src={TripImage}
                                                alt={trip.name}
                                                className="card-img-top"
                                                style={{
                                                    height: "200px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {trip.name}
                                                </h5>
                                                <h6 className="text-muted">
                                                    {trip.destination}
                                                </h6>
                                                <p className="card-text">
                                                    {trip.description}
                                                </p>
                                                <p className="fw-bold text-success">
                                                    ${trip.price}
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <button
                                                        className="btn btn-sm btn-outline-primary"
                                                        onClick={() =>
                                                            handleEdit(trip)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() =>
                                                            handleDelete(trip)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="tripModal"
                            tabIndex="-1"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">
                                            {editingTrip
                                                ? "Edit Trip"
                                                : "Add New Trip"}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Trip Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Destination
                                                </label>
                                                <input
                                                    type="text"
                                                    id="destination"
                                                    className="form-control"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    className="form-control"
                                                    rows="3"
                                                    value={formData.description}
                                                    onChange={handleInputChange}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Price ($)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    className="form-control"
                                                    value={formData.price}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Image URL
                                                </label>
                                                <input
                                                    type="url"
                                                    id="image"
                                                    className="form-control"
                                                    value={formData.image}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Save Trip
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AdminPanel;
