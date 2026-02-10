require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DB/db");
const serviceRoute = require("./routes/serviceRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");

const app = express();
const _port = process.env.PORT;

connectDB();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/services", serviceRoute);

app.listen(_port, () => {
  console.log(`app started at port:`, _port);
});
