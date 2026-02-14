const ProviderProfile = require('../models/providerProfileModel');

const createProviderProfile = async (req, res) => {
  const profile = await ProviderProfile.create({
    user: req.user._id,
    bio: req.body.bio,
    location: req.body.location,
  });

  res.status(201).json(profile);
};

const getAllProviders = async (req, res) => {
  const providers = await ProviderProfile.find().populate("user");
  res.json(providers);
};


const getProviderById = async (req, res) => {
  const provider = await ProviderProfile.findById(req.params.id).populate("user");
  if (!provider) return res.status(404).json({ message: "Not found" });

  res.json(provider);
};

const updateProviderProfile = async (req, res) => {
  const profile = await ProviderProfile.findOneAndUpdate(
    { user: req.user._id },
    req.body,
    { new: true }
  );

  res.json(profile);
};

module.exports = { createProviderProfile, getAllProviders, getProviderById, updateProviderProfile };