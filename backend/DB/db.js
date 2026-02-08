const { response } = require("express");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Success: Connected to MngoDB Atlas");
  } catch (error) {
    console.log("Error: connection error:", error.message);
    process.exit(1);
  }
}

module.exports = { connectDB };
