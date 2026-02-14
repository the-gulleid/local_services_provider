require("dotenv").config();
const express = require("express");
const cors = require('cors');
const connectDB  = require('./config/db.js');
connectDB();

const serviceRoute = require("./routes/serviceRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");

const AuthRoute = require('./routes/AuthRoute');
const AdminRoute = require('./routes/AdminRoute');
const ProviderProfileRoute = require('./routes/ProviderProfileRoute');
const BookingRoute = require('./routes/BookingRoute');

const _port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/services", serviceRoute);

// may routes 
app.use('/api/Auth', AuthRoute);
app.use('/api/admin', AdminRoute);
app.use('/api/ProviderProfile', ProviderProfileRoute);
app.use('/api/booking', BookingRoute);

app.listen(_port, () => {
  console.log(`app started at port:`, _port);
});
