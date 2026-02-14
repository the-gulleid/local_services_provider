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

router.get('/:id', getOneUser);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
