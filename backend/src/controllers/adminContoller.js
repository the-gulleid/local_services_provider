const User = require('../models/usersModel');
const ProviderProfile = require('../models/providerProfileModel');
const Service = require('../models/servicesModel');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

const getProviders = async (req, res) => {
  const providers = await ProviderProfile.find();
  res.json(providers);
};


const approveProvider = async (req, res) => {
  const provider = await ProviderProfile.findByIdAndUpdate(
    req.params.id,
    { verified: true },
    { new: true }
  );
  res.json(provider);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

const getAllServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

const createServiceAdmin = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
};

const updateServiceAdmin = async (req, res) => {
  const service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(service);
};

const deleteServiceAdmin = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = { getProviders, approveProvider, getAllServices, createServiceAdmin, updateServiceAdmin, deleteServiceAdmin, getAllUsers, deleteUser };