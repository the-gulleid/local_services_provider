const User = require("../models/usersModel");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Success getting all the users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting all the users, error:${error.message}`,
      data: [],
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `user doesn't exist`,
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      message: "Success getting the user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting the user, error:${error.message}`,
      data: [],
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { id, name, email, password, role, service, price, description } =
      req.body;

    const existingUser = await User.findOne({ $or: [{ id }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: `user already exist`,
        data: [],
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      id,
      name,
      email,
      password: hashedPassword,
      role,
      service,
      price,
      description,
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(200).json({
      success: true,
      message: "Success creating new user",
      data: userResponse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error creating new user, error:${error.message}`,
      data: [],
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    delete updateData.rating;
    delete updateData.aproved;
    delete updateData.id;
    delete updateData.banned;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: `please fill the data`,
        data: [],
      });
    }

    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const user = await User.findOneAndUpdate({ id }, updateData, {
      new: true,
      runValidators: true,
      context: "query",
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `user doesn't exist`,
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully updated the user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error updating the user, error:${error.message}`,
      data: [],
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndDelete({ id });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: `user doesn't exist`,
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      message: "successfully deleted the user",
      data: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error deleting the user, error:${error.message}`,
      data: [],
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
