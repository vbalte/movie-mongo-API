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
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

module.exports = Review;
