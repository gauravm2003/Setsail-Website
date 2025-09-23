// Importing Necessary Modules..
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const tripRoutes = require("./routes/tripRoutes");

// Env Setup And DB Connection
dotenv.config();
connectDB();

// Initialize The App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/trips", tripRoutes);

app.get("/", (req, res) => {
    res.send(" Travel API is running... ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));