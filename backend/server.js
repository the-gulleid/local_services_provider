require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DB/db");

const app = express();
const _port = process.env.PORT;

connectDB();

app.listen(_port, () => {
  console.log(`app started at port:`, _port);
});
