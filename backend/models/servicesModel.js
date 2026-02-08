const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceId: { type: Number, required: true, unique: true },
  serviceName: { type: String, required: true, unique: true },
  providersInThisService: { type: Number },
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
