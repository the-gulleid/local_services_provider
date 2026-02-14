const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      unique: true,
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    schedule: {
      date: Date,
      time: String,
    },

    address: String,

    location: {
      lat: Number,
      lng: Number,
    },

    note: String,

    price: Number,

    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "in_progress",
        "completed",
        "cancelled",
        "rejected",
      ],
      default: "pending",
    },

    cancelReason: String,
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
