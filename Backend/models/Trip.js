const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quickInfo: [
      {
        type: String,
      },
    ],
    destination: {
      type: String,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    returnTime: {
      type: String,
      required: true,
    },
    dressCode: {
      type: String,
    },
    included: [
      {
        type: String,
      },
    ],
    notIncluded: [
      {
        type: String,
      },
    ],
    gallery: [
      {
        type: String,
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
