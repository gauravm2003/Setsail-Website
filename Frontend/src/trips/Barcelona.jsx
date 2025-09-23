import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Barcelona({
    title = "Barcelona Highlights Tour",
    price = 2250,
    reviewCount = 34,
    rating = 5,
    description = "Discover the magic of Barcelona on this full-day guided tour. Explore Antoni Gaudí’s masterpieces, walk through the Gothic Quarter, enjoy the lively atmosphere of Las Ramblas, and take in panoramic views from Montjuïc.",
    quickInfo = [
        { label: "📅 1 Day", aria: "Tour Duration 1 Day" },
        { label: "👤 10+ Age", aria: "Minimum Age 10+" },
    ],
    details = {
        Destination: "Barcelona, Spain",
        Departure: "Plaça de Catalunya, Barcelona",
        "Departure Time": "Approximately 9:00 AM",
        "Return Time": "Approximately 7:00 PM",
        "Dress Code": "Casual, comfortable shoes recommended",
        Included: [
            { label: "Professional English-speaking guide" },
            { label: "Entrance to Sagrada Família" },
            { label: "Air-conditioned coach transport" },
            { label: "Hotel pickup & drop-off" },
        ],
        "Not Included": [
            { label: "Meals & Drinks" },
            { label: "Personal Expenses" },
            { label: "Tips & Gratuities" },
        ],
    },
    gallery = [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    ],
}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
        date: "",
        tickets: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirm", { state: formData }); // send data to confirm page
    };

    return (
        <div className="position-relative">
            <div className="container py-5 d-flex flex-column flex-lg-row gap-5">
                {/* Left Section */}
                <section className="flex-grow-1">
                    <h1 className="fs-2 fw-bold text-dark">
                        {title}{" "}
                        <span className="text-info fw-semibold ms-2 fs-5">
                            ${price}
                        </span>{" "}
                        <span className="text-muted fw-normal fs-6">
                            /per person
                        </span>
                    </h1>

                    {/* Rating */}
                    <div className="d-flex align-items-center gap-2 mt-2">
                        <div className="d-flex text-info">
                            {[...Array(rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-label={`Star ${i + 1}`}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.47a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.404-2.471a1 1 0 00-1.176 0l-3.404 2.471c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.035 9.402c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.975z" />
                                </svg>
                            ))}
                            {[...Array(5 - rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="text-secondary opacity-25"
                                    viewBox="0 0 20 20"
                                    aria-label={`Empty star ${i + 1}`}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.47a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.404-2.471a1 1 0 00-1.176 0l-3.404 2.471c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.035 9.402c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.975z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-muted">
                            ({reviewCount} Review{reviewCount > 1 ? "s" : ""})
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-muted">{description}</p>

                    {/* Quick Info Buttons */}
                    <div className="mt-4 d-flex gap-3">
                        {quickInfo.map((info, idx) => (
                            <button
                                key={idx}
                                className="text-white d-flex align-items-center gap-2 fw-semibold"
                                aria-label={info.aria}
                                style={{
                                    width: "auto",
                                    padding: "10px 15px",
                                    borderRadius: "20px",
                                    marginTop: "5px",
                                    border: "1px solid black",
                                    backgroundColor: "#3fd0d4",
                                    color: "white",
                                    outline: "none",
                                    // border: 'none'
                                }}
                            >
                                {info.label}
                            </button>
                        ))}
                    </div>

                    {/* Details Table */}
                    <dl className="row row-cols-1 row-cols-sm-1 gy-3 gx-4 mt-5 text-muted small">
                        {Object.entries(details).map(([key, value], idx) => (
                            <div
                                key={idx}
                                className="d-flex justify-content-normal"
                            >
                                <dt className="fw-semibold text-dark w-25">
                                    {key}
                                </dt>
                                <dd className="w-75">
                                    {Array.isArray(value) ? (
                                        <ul className="list-unstyled mb-0">
                                            {value.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-1"
                                                >
                                                    {/* You can customize icons based on Included/Not Included if needed */}
                                                    {key === "Included" && (
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="me-2 text-success"
                                                            aria-label="Included Item"
                                                        />
                                                    )}
                                                    {key === "Not Included" && (
                                                        <FontAwesomeIcon
                                                            icon={faTimes}
                                                            className="me-2 text-danger"
                                                            aria-label="Not Included Item"
                                                        />
                                                    )}
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mb-0">{value}</p>
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* Gallery */}
                    <div className="mt-5">
                        <h2 className="fs-4 fw-bold text-dark mb-3">
                            From our gallery
                        </h2>
                        <p className="text-muted">
                            Some highlights from the trip.
                        </p>
                        <div className="row g-3">
                            {gallery.map((src, i) => (
                                <div key={i} className="col-12 col-sm-4">
                                    <img
                                        src={src}
                                        alt={`Gallery ${i + 1}`}
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right Section (Booking Form) */}
                <aside className="w-100" style={{ maxWidth: "360px" }}>
                    <form
                        className="text-white p-4 shadow-lg"
                        style={{ backgroundColor: "#3fd0d4" }}
                        onSubmit={handleSubmit}
                    >
                        <h3 className="fs-5 fw-bold">Book This Tour</h3>
                        <p className="small text-light">
                            Arrange your trip in advance - book this tour now!
                        </p>

                        <input
                            type="text"
                            name="name"
                            className="form-control mb-3 bg-light text-dark"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ fontSize: "14px" }}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-3 bg-light text-dark"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ fontSize: "14px" }}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            className="form-control mb-3 bg-light text-dark"
                            placeholder="Phone"
                            value={formData.phone}
                            style={{ fontSize: "14px" }}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="date"
                            className="form-control mb-3 bg-light text-dark"
                            value={formData.date}
                            onChange={handleChange}
                            style={{ fontSize: "14px" }}
                            required
                        />
                        <input
                            type="number"
                            name="tickets"
                            className="form-control mb-3 bg-light text-dark"
                            placeholder="Number of tickets"
                            value={formData.tickets}
                            onChange={handleChange}
                            style={{ fontSize: "14px" }}
                        />
                        <textarea
                            name="message"
                            rows="3"
                            className="form-control mb-3 bg-light text-dark"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ fontSize: "14px" }}
                        ></textarea>

                        <button
                            type="submit"
                            className="btn btn-outline-light w-100 fw-bold mb-2"
                            style={{ fontSize: "14px" }}
                        >
                            CHECK AVAILABILITY
                        </button>
                        <button
                            type="submit"
                            className="btn btn-outline-light w-100 fw-bold"
                            style={{ fontSize: "14px" }}
                        >
                            BOOK NOW
                        </button>
                    </form>
                </aside>
            </div>

            {/* Bottom Fixed Buttons */}
            <div
                className="position-fixed d-flex flex-column gap-2"
                style={{
                    right: "1rem",
                    bottom: "4rem",
                    maxWidth: "90px",
                    zIndex: 1030,
                }}
            >
                <button
                    className="btn btn-danger fw-semibold text-uppercase"
                    aria-label="View Related Tours"
                >
                    Related
                </button>
                <button
                    className="btn btn-light border d-flex align-items-center gap-2 text-dark fw-semibold text-uppercase"
                    aria-label="Buy Tour Now"
                >
                    🛒 Buy Now
                </button>
            </div>
        </div>
    );
}

export default Barcelona;
