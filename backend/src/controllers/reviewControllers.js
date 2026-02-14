const Review = require("../models/reviewModel");
const User = require("../models/usersModel");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().lean();

    if (reviews.length === 0) {
      return res.status(404).json({
        success: false,
        message: "there are no reviews",
        data: [],
      });
    }

    const reviewsWithUsers = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findOne({ id: review.userId }).select(
          "name email",
        );
        return {
          ...review,
          user: user || "User not found",
        };
      }),
    );

    res.status(200).json({
      success: true,
      message: "Success getting all the reviews",
      data: reviewsWithUsers,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting all the reviews, error:${error.message}`,
      data: [],
    });
  }
};

const getOneReview = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const query = userId
      ? Review.find({ userId }).lean()
      : Review.findOne({ id }).lean();

    const review = await query;

    if (!review || (Array.isArray(review) && review.length === 0)) {
      return res.status(404).json({
        success: false,
        message: "there are no reviews",
        data: [],
      });
    }

    let data;
    if (Array.isArray(review)) {
      data = await Promise.all(
        review.map(async (rev) => {
          const user = await User.findOne({ id: rev.userId }).select(
            "name email",
          );
          return { ...rev, user: user || "User not found" };
        }),
      );
    } else {
      const user = await User.findOne({ id: review.userId }).select(
        "name email",
      );
      data = { ...review, user: user || "User not found" };
    }

    res.status(200).json({
      success: true,
      message: "Success getting the review",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error getting the review, error:${error.message}`,
      data: [],
    });
  }
};

const createReview = async (req, res) => {
  try {
    const { id, userId, bookingId, rating, comment } = req.body;

    if (!id || !userId || !bookingId || !rating || !comment) {
      return res.status(404).json({
        success: false,
        message: "please fillout the data",
      });
    }

    const existingReview = await Review.findOne({ id });
    if (existingReview) {
      return res.status(404).json({
        success: false,
        message: "a review with this id already exist",
      });
    }

    const newReview = await Review.create({
      id,
      userId,
      bookingId,
      rating,
      comment,
    });

    res.status(200).json({
      success: true,
      message: "Successfully created a new review",
      data: newReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error creating a new review`,
      data: [],
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;

    const updatedReview = await Review.findOneAndUpdate({ id }, updatedata, {
      new: true,
      runValidators: true,
    });

    if (!updatedReview) {
      return res.status(404).json({
        success: false,
        message: "the review that you are trying to update doesn't exist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully updated the review",
      data: updatedReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error updating the review, error:${error.message}`,
      data: [],
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await Review.findOneAndDelete({ id });

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "the review that you trying to delete doesn't exist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully deleted the review",
      data: deletedReview,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Error deleting the review, error:${error.message}`,
      data: [],
    });
  }
};

module.exports = {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
  deleteReview,
};
