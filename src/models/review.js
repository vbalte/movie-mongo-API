const mongoose = require("mongoose");
const validator = require("validator");
const Review = mongoose.model("Review", {
  movie: {
    type: String,
    required: true
  },
  reviewScore: {
    type: Number,
    min: [1, "Number must be between 1 and 5"],
    max: [5, "Number must be between 1 and 5"],
    required: true
  },
  reviewText: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});
module.exports = Review;
