const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    role: { 
      type: String, 
      enum: ["customer", "provider", "admin"],
      default: "customer"
    },
    phone: { type: String },
    status: {
      type: String,
      enum: ["active", "blocked", "deleted"],
      default: "active",
    }
  },
  { 
    collation: "User",
    timestamps: true 
  },
);

module.exports = mongoose.model("User", userSchema);
