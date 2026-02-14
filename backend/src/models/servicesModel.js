const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },

    description: String,

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    priceType: {
      type: String,
      enum: ["fixed", "hourly"],
      default: "fixed",
    },

    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    images: [String],

    status: {
      type: String,
      enum: ["active", "inactive", "deleted"],
      default: "active",
    },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("service", serviceSchema);
