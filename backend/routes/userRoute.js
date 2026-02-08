const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;
