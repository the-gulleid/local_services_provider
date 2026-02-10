const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  bookingId: { type: Number, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
