const Service = require("../models/servicesModel");

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      success: true,
      message: "Success getting all the services",
      data: services,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting services, error:${error.message}`,
      data: null,
    });
  }
};

const getOneService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findOne({
      serviceId: id,
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "service doesn't exist",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully got the service",
      data: service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting the service, error:${error.message}`,
      data: null,
    });
  }
};

const createService = async (req, res) => {
  try {
    const { id, name } = req.body;

    const existingService = await Service.findOne({
      $or: [{ serviceId: id }, { serviceName: name }],
    });
    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "that service already exist",
      });
    }

    const newService = await Service.create({
      serviceId: id,
      serviceName: name,
    });
    res.status(201).json({
      success: true,
      message: "Successfully created a service",
      data: newService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error during creating seervice, error:${error.message}`,
    });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please provide a new name",
      });
    }

    const updatedService = await Service.findOneAndUpdate(
      {
        serviceId: id,
      },
      { serviceName: name },
      { new: true, runValidators: true },
    );

    if (!updatedService) {
      return res.status(404).json({
        success: false,
        message: "this service doesn't exist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully updated the service",
      data: updatedService,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error updating the service, error:${error.message}`,
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findOneAndDelete({ serviceId: id });

    if (!deletedService) {
      return res.status(404).json({
        success: false,
        message: "the service doesn't exist ",
      });
    }
    res.status(200).json({
      success: true,
      message: "Success deleting the service",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error deleting the service, error:${error.message}`,
    });
  }
};

module.exports = {
  getAllServices,
  getOneService,
  createService,
  updateService,
  deleteService,
};
