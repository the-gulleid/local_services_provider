const express = require("express");
const {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewControllers");
const router = express.Router();

router.route("/").get(getAllReviews).post(createReview);

router.route("/:id").get(getOneReview).put(updateReview).delete(deleteReview);
router.get("/user/:userId", getOneReview);

module.exports = router;
