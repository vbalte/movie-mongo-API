const mongoose = require("mongoose");
const Movie = mongoose.model("movie", {
  title: {
    type: String
  },
  year: {
    type: Number
  },
  genre: {
    type: String
  }
});

module.exports = Movie;
