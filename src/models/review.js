const mongoose = require("mongoose");

const Review = mongoose.model("review", {
  movie: {
    type: String,

    required: true
  },

  reviewScore: {
    type: Number,

    required: true,

    min: 1,

    max: 5
  },

  reviewText: {
    type: String,

    required: true
  }
});

module.exports = Review;

