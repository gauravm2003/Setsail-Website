import React from "react";

import "../styles/Navbar.css";

function Navbar() {

    return (
        <div>
            <nav className="navbar flex items-center justify-between px-4 py-3 md:px-6">
                <div
                    className="text-black text-lg font-bold"
                    style={{
                        fontSize: "25px",
                        fontWeight: "500",
                    }}
                >
                    SetSail Admin Panel
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/add-new-trip">
                        <button
                            onclick="showModal()"
                            className="addNewTrip"
                            style={{ borderRadius: "30px" }}
                        >
                            <span className="mr-2">+</span>Add New Trip
                        </button>
                    </a>

                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search trips..."
                        className="searchBar"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
