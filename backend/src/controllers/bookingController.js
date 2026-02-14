const Booking = require('../models/bookingModel');

const createBooking = async (req, res) => {
  const booking = await Booking.create({
    user: req.user._id,
    service: req.body.service,
  });
  res.status(201).json(booking);
};

const acceptBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "accepted" },
    { new: true }
  );
  res.json(booking);
};

const rejectBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "rejected" },
    { new: true }
  );
  res.json(booking);
};

const completeBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "completed" },
    { new: true }
  );
  res.json(booking);
};

module.exports = { createBooking, acceptBooking, rejectBooking, completeBooking }