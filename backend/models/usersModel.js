const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "provider"] },
    service: {
      type: String,
      required: function () {
        return this.role === "provider";
      },
    },
    price: {
      type: Number,
      required: function () {
        return this.role === "provider";
      },
    },
    description: {
      type: String,
      required: function () {
        return this.role === "provider";
      },
    },
    rating: { type: Number, default: 0 },
    approved: { type: Boolean, default: false },
    banned: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
