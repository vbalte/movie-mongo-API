const express = require("express");
const Movie = require("../models/movie");
const router = new express.Router();

router.post("/movies", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/movies", async (req, res) => {
  try {
    let movies = await Movie.find({});
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
