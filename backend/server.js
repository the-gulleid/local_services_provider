require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DB/db");
const servicesRoute = require("./routes/servicesRoute");
const userRoute = require("./routes/userRoute");

const app = express();
const _port = process.env.PORT;

connectDB();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/services", servicesRoute);

app.listen(_port, () => {
  console.log(`app started at port:`, _port);
});
