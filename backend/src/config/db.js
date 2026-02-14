const { response } = require("express");
const mongoose = require("mongoose");

// function to connect to mongoDB Atlas
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Success: Connected to MngoDB Atlas", process.env.MONGO_URI);
  } catch (error) {
    console.log("Error: connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
