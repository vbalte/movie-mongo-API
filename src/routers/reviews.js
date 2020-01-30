const express = require("express");
const Review = require("../models/review");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/reviews", auth, async (req, res) => {
  //const review = new Review(req.body);
  const review = new Review({
    ...req.body,
    owner: req.user._id
  });
  try {
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    let reviews = await Review.find({});
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/reviews/:id", async (req, res) => {
  const movie = req.params.id;
  try {
    let reviews = await Review.find({ movie: movie });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.patch("/reviews/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["reviewText"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res
      .status(400)
      .send({ error: "Invalid Updates, please only update the review text" });
  }
  try {
    const review = await Review.findById(req.params.id);
    updates.forEach(update => (review[update] = req.body[update]));
    await review.save();
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
