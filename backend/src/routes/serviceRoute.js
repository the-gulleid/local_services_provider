const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getOneService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/servicesController");

router.route("/").get(getAllServices).post(createService);

router
  .route("/:id")
  .get(getOneService)
  .put(updateService)
  .delete(deleteService);

module.exports = router;
